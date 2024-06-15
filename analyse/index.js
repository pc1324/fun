// 1.加载页面同时渲染，默认逃生者页面
renderPage()
// 2.绑定切换导航点击事件
document.querySelector('.nav ul').addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    renderPage(e.target.dataset.id)
    // 切换活动状态
    document.querySelector('.nav li.active').classList.remove('active')
    e.target.classList.add('active')
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
  } else if (number === 1) {
    // 杀手页面
    renderKillerPage()
  } else if (number === 2) {
    // 逃生者技能页面
    renderSurivorSkillPage()
  } else if (number === 3) {
    // 杀手技能页面
    renderKillerSkillPage()
  }

}

// 渲染逃生者页面
function renderSurvivorPage() {
  // 1.迭代数组+拼接数组字符串
  const survivorsPage = survivorsList.map(item => {
    return `
    <div class="survivor-avatar" data-obj=${JSON.stringify(item)}>
      <img src="${item.img_url}" alt="">
      <span>${item.name}</span>
    </div>
    `
  }).join('')
  // 2.插入内容html
  document.querySelector('.content').innerHTML = `
  <div class="survivor">
    ${survivorsPage}
  </div>
  `
  // 3.渲染模态框为逃生者版本
  document.querySelector('.model-box').innerHTML = `
  <div class="model survivor-model hidden">
      
  </div>
  `

  // 4.为头像增加点击事件
  const survivorAvatars = Array.from(document.querySelectorAll('.survivor-avatar'))
  survivorAvatars.forEach(item => {
    // 每个头像加一个点击事件
    item.addEventListener('click',()=>{
      console.log(`当前点击的是：${JSON.parse(item.dataset.obj).name}`)
      const obj = JSON.parse(item.dataset.obj)
      // 修改模态框信息
      document.querySelector('.survivor-model').innerHTML =`
      <div class="close">X</div>
      <div class="model-header">
        <h1>${obj.name}</h1>
        <div class="avatar">
          <img src="${obj.img_url}" alt="">
        </div>
      </div>
      <div class="model-body">
        <div class="introduce">
          <div class="key">
            <p>姓名：</p>
            <p>性别：</p>
            <p>技能1：</p>
            <p>技能2：</p>
            <p>技能3：</p>
            <p>介绍：</p>
          </div>
          <div class="value">
            <p>${obj.name}</p>
            <p>${obj.gender}</p>
            <p>${obj.skills.one}</p>
            <p>${obj.skills.two}</p>
            <p>${obj.skills.three}</p>
            <p>${obj.introduction}</p>
          </div>
        </div>
      </div>
      `
      // 绑定隐藏模态框事件(必须在渲染后绑定)
      document.querySelector('.model-box .close').addEventListener('click',function(){
        this.parentNode.classList.add('hidden')
      })
      // 显示模态框
      document.querySelector('.survivor-model').classList.remove('hidden')
    }) // 每个头像加一个点击事件
  }) // 4.为头像增加点击事件

}


// 渲染杀手页面
function renderKillerPage() {
  // 插入html
  document.querySelector('.content').innerHTML = `
  <div class="killer">
    <div class="left">
      <ul>
        <li>T0<span>真神</span></li>
        <li>T0.5<span>幻神</span></li>
        <li>T1<span>很强</span></li>
        <li>T1.5<span>强</span></li>
        <li>T2<span>较强</span></li>
        <li>T2.5<span>一般</span></li>
        <li>T3<span>较弱</span></li>
        <li>T3.5<span>很弱</span></li>
        <li>T4<span>下水道</span></li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li data-rank="T0"></li>
        <li data-rank="T0.5"></li>
        <li data-rank="T1"></li>
        <li data-rank="T1.5"></li>
        <li data-rank="T2"></li>
        <li data-rank="T2.5"></li>
        <li data-rank="T3"></li>
        <li data-rank="T3.5"></li>
        <li data-rank="T4"></li>
      </ul>
    </div>
  </div>
  `

  const lis = Array.from(document.querySelectorAll('.killer .right ul li'))
  lis.forEach(li => {
    // 迭代数组+拼接数组字符串
    killersList.forEach(item => {
      // console.log(item)
      if (li.dataset.rank === item.rank) {
        console.log(item.rank)
        const div = document.createElement('div')
        // 创建div->添加killer-avatar类名->添加自定义属性name->加入图片头像->追加到rank里面
        div.classList.add('killer-avatar')
        div.dataset.name = item.name
        div.innerHTML = `
        <img src="${item.img_url}" alt="">
        `
        li.appendChild(div)
      }
    })
  })


}

// 渲染逃生者技能页面
function renderSurivorSkillPage() {
  // 迭代数组+拼接数组字符串

  // 插入html
  document.querySelector('.content').innerHTML = `
  2
  `
}

// 渲染杀手技能页面
function renderKillerSkillPage() {
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