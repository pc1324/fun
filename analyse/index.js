renderPage()
// 渲染页面
function renderPage(number) {
  number = number || "0"
  number = parseInt(number)
  console.log(number)
  
  if (number === 0) {
    renderSurvivorPage()
  }
}

// 渲染逃生者页面
function renderSurvivorPage() {
  // 迭代数组+拼接数组字符串
  const survivorsPage = survivorsList.map(item=>{
    console.log(item)
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
// 随机数函数
function getRandom(N, M) {
  N = N || 0
  M = M || 0
  return Math.floor(Math.random() * (M - N + 1) + N)
}