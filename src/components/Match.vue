<template>
  <div class="match">
    <span class="number">{{ match.number }}</span>
    <div
      class="participant"
      v-for="(participant, index) in match.participant"
      :key="index"
      :class="[
        index === 0 ? 'top' : 'bottom',
        { win: match.winIndex === index },
        { last: match.id.r === 3 },
        `${participant._id}`
      ]"
      @mouseover="mouseOverParticipant(participant._id)"
      @mouseout="mouseOutParticipant(participant._id)"
    >
      <span class="seed">{{ match.seed[index] }}</span>
      <span class="name">{{ participant.name }}</span>
      <div class="score">{{ match.score[index] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Match",
  props: ["match"],
  methods: {
    mouseOverParticipant(id) {
      const el = document.getElementsByClassName(id);
      for (let i = 0; i < el.length; i++) {
        el[i].classList.add("hovered");
      }
    },
    mouseOutParticipant(id) {
      const el = document.getElementsByClassName(id);
      for (let i = 0; i < el.length; i++) {
        el[i].classList.remove("hovered");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.match {
  position: relative;
  margin: 0.8rem;
  margin-left: 1rem;
  cursor: default;
  .number {
    position: absolute;
    left: -0.9rem;
    top: 1.6rem;
    font-size: 0.8rem;
  }
  .participant {
    width: 15rem;
    height: 2rem;
    background: rgb(46, 47, 51);
    border: 0.1rem solid rgb(61, 99, 204);
    color: #ffffff;
    padding-left: 2.3rem;
    display: flex;
    align-items: center;
    position: relative;
    &.top {
      border-radius: 0.2rem 0.2rem 0 0 / 0.2rem 0.2rem 0 0;
      border-bottom: none;
    }
    &.bottom {
      border-radius: 0 0 0.2rem 0.2rem / 0 0 0.2rem 0.2rem;
      &.last {
        border-top: none;
      }
    }
    &.win {
      &.last {
        border: 0.1rem solid rgb(234, 98, 71);
        .score {
          background: rgb(234, 98, 71);
          border-left: 0.1rem solid rgb(234, 98, 71);
        }
      }
      .score {
        background: rgb(61, 99, 204);
      }
    }
    &.hovered {
      background: rgb(61, 99, 204);
    }

    .seed {
      position: absolute;
      left: 0.7rem;
      font-size: 0.8rem;
      color: rgb(48, 67, 128);
    }
    .name {
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 10rem;
      overflow: hidden;
    }
    .score {
      position: absolute;
      width: 2rem;
      height: 100%;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-left: 0.1rem solid rgb(61, 99, 204);
      background: rgb(65, 68, 77);
    }
  }
}
</style>
