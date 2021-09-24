<template>
  <div id="MenuY">
    <ul id="MenuY_ul">
      <li>
        <div class="MenuY_ul_li_div">Menu-1</div>
        <div class="MenuY_ul_li_child_uls">
          <ul>
            <li>
              <div class="MenuY_ul_li_div">Menu-1-1</div>
            </li>
            <li>
              <div class="MenuY_ul_li_div">Menu-1-2</div>
              <div class="MenuY_ul_li_child_uls">
                <ul>
                  <li>
                    <div class="MenuY_ul_li_div">Menu-1-2-1</div>
                  </li>
                  <li>
                    <div class="MenuY_ul_li_div">Menu-1-2-2</div>
                  </li>
                  <li>
                    <div class="MenuY_ul_li_div">Menu-1-2-3</div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="MenuY_ul_li_div">Menu-1-3</div>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div class="MenuY_ul_li_div">Menu-2</div>
      </li>
      <li>
        <div class="MenuY_ul_li_div">Menu-3</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuY',
  methods: {
    OpenOrHidden (e) {
      console.log(e)
      console.log(e.target)
      console.log(e.currentTarget)
    }
  },
  mounted () {
    let divs = document.getElementsByClassName('MenuY_ul_li_div')
    for (let i = 0; i < divs.length; i++) {
      let div = divs[i]
      div.addEventListener('click', () => {
        for (let o = 0; o < divs.length; o++) {
          let node = divs[o]
          node.style.color = 'black'
          node.style.background = 'white'
        }
        div.style.color = 'white'
        div.style.background = 'black'
        let childUlsDiv = div.parentNode.getElementsByClassName('MenuY_ul_li_child_uls')[0]
        if (childUlsDiv != null) {
          switch (childUlsDiv.style.display) {
            case '' :
              childUlsDiv.style.display = 'none'
              break
            case 'none' :
              childUlsDiv.style.display = ''
              break
          }
        }
      })
    }
  }
}
</script>

<style>
#MenuY{
  position: absolute;
  top: 0;
  right: 0;
}
.MenuY_ul_li_div{
  width: 100px;
  height: 30px;
}
</style>
