<template>
    <div>
        <div>
            <Penalty msg="Strafzahlung hinzufügen" />
        </div>
        <div class="form-box">
            <div class="form">
                <form>
                    <br><h3> Wer muss ins Phrasenschwein einzahlen? </h3></br>
                    <input class="input" type="text" v-model="name" name="name" id="name" placeholder="Name der schuldigen Person"><br><br>
                    <br><h3> Wie viel muss ins Phrasenschwein eingezahlt werden? (in €) </h3></br>
                    <input class="input" type="text" v-model="value" name="value" id="value" placeholder="Einzuzahlender Betrag"><br><br>  
                    <button class="button" @click="addPenalty" type="button">Eintrag hinzufügen</button> <br>                  
                </form>
            </div>
            <div>
                <img alt="Coin" src="../assets/Coin 3.svg" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Penalty from "@/components/Penalty.vue"; // @ is an alias to /src

@Component({
  components: {
    Penalty,
  },
})

/* Code umstrukturieren, damit es ohne Views und Components geht; dann klappt auch der default export */

export default class PenaltyView extends Vue {
    data () {
        return {
            name: '',
            value: '',
            error: ''
        }
    },
    methods: {
        async addPenalty () {
            try {
                const reponse = await this.$http.post('http://localhost:3000/penalty/save', {
                    name: this.name,
                    value: this.value,
                });
            } catch(error) {
                this.error = error.response.data.error;
            }
        }
        this.$router.push('/dashboard');
      } catch(error) {
        this.error = error.response.data.error;
      }
    },
  },
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
form-box {
    display: flex;
    justify-content: center;
}
</style>