<template>
  <div class="cells" :class="theme">
    <div class="row" v-for="(r, index) in rows">
      <div v-if="index != 0 || (outerBorder == true || outerBorder == 'true')" class="hairline-top"></div>
      <div class="col" v-for="c in cols" @click="cellClicked(r*cols.length + c, items[r*cols.length + c].key, $event)" :class="{'active': ((r*cols.length + c)==selected)}">
        <div v-if="c && (innerBorder == true || innerBorder == 'true')" class="hairline-left"></div>
        <div v-html="items[r*cols.length + c].value"></div>
      </div>
    </div>
    <div v-if="outerBorder == true || outerBorder == 'true'" class="hairline-bottom"></div>
  </div>
</template>
<script>
  const range = (n) => {
    let l = [];
    for (let i = 0; i < n; i++) l.push(i);
    return l;
  };

  export default {
    props: {
      theme: {
        type: [Number, String]
      },
      row: {
        type: [Number, String],
        default: 3
      },
      col: {
        type: [Number, String],
        default: 3
      },
      items: {
        type: Array,
        required: true
      },
      onCellClick: Function,
      outerBorder: {
        type: [String, Boolean],
        default: true
      },
      innerBorder: {
        type: [String, Boolean],
        default: true
      }
    },

    data() {
      return {
        rows: range(parseInt(this.row)),
        cols: range(parseInt(this.col)),
        selected: 0,
      }
    },

    methods: {
      cellClicked(cellIndex, key, event) {
//        console.log(cellIndex, key, event);
        this.selected = cellIndex;
        if (this.onCellClick) this.onCellClick(cellIndex, key);
      }
    }
  }
</script>
