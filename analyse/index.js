// 1.加载页面同时渲染，默认逃生者页面
renderPage()
// 2.绑定切换导航点击事件
document.querySelector('.nav ul').addEventListener('click',function(e) {
  if (e.target.tagName === 'LI') {
    renderPage(e.target.dataset.id)
  }
})
// 渲染页面函数
function renderPage(number) {
  number = number || "0"
  number = parseInt(number)
  console.log(`渲染id：${number}`)
  
  if (number === 0) {
    // 逃生者页面
    renderSurvivorPage()
  }else if(number === 1){
    // 杀手页面
    renderKillerPage()
  }else if(number === 2){
    // 逃生者技能页面
    renderSurivorSkillPage()
  }else if(number === 3){
    // 杀手技能页面
    renderKillerSkillPage()
  }
  
}

// 渲染逃生者页面
function renderSurvivorPage() {
  // 迭代数组+拼接数组字符串
  const survivorsPage = survivorsList.map(item=>{
    // console.log(item)
    return `
    <div class="survivor-avatar">
      <img src="${item.img_url}" alt="">
      <span>${item.name}</span>
    </div>
    `
  }).join('')
  // 插入html
  document.querySelector('.content').innerHTML = `
  <div class="survivor">
    ${survivorsPage}
  </div>
  `
}

// 渲染杀手页面
function renderKillerPage(){
  // 迭代数组+拼接数组字符串
  
  // 插入html
  document.querySelector('.content').innerHTML = `
  1
  `
}

// 渲染逃生者技能页面
function renderSurivorSkillPage(){
  // 迭代数组+拼接数组字符串
  
  // 插入html
  document.querySelector('.content').innerHTML = `
  2
  `
}

// 渲染杀手技能页面
function renderKillerSkillPage(){
  // 迭代数组+拼接数组字符串
  
  // 插入html
  document.querySelector('.content').innerHTML = `
  3
  `
}
// 随机数函数
function getRandom(N, M) {
  N = N || 0
  M = M || 0
  return Math.floor(Math.random() * (M - N + 1) + N)
}