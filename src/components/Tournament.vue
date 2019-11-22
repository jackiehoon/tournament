<template>
  <div class="tournament">
    <header class="header">
      <span>Round1</span><span>Semifinals</span><span>Finals</span>
    </header>
    <div class="round-wrapper">
      <div
        class="round"
        v-for="(matchList, round) in matchList"
        :key="round"
        :class="`round-${round + 1}`"
      >
        <RoundLine :round="round + 1" v-if="round > 0" />
        <match
          v-for="(match, index) in matchList"
          :key="index"
          :match="match"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Match from "@/components/Match.vue";
import RoundLine from "@/components/RoundLine.vue";
import matchList from "@/assets/InterviewData.json";

export default {
  name: "tournament",
  components: { Match, RoundLine },
  data() {
    return {
      matchList: []
    };
  },
  created() {
    matchList.match.map(m => {
      m.winIndex = m.score.indexOf(Math.max(...m.score));

      let index = m.id.r - 1;
      if (!this.matchList[index]) this.matchList[index] = [];
      this.matchList[index].push(m);
    });
  }
};
</script>

<style scoped lang="scss">
.tournament {
  margin: 1rem;
  .header {
    width: 55rem;
    height: 3rem;
    background: #424242;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: black;
    font-size: 1.3rem;
    margin-bottom: 3.5rem;
  }
  .round-wrapper {
    display: flex;
    .round {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      position: relative;
      & + .round {
        margin-left: 2.5rem;
      }
    }
  }
}
</style>
