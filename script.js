let btn = document.querySelector('button')

let inp = document.querySelector('.inp')

let select = document.querySelector('#select')

let wrapper = document.getElementById('wrapper')

// İnput value boş oldugunda bu işlem çalışmasın. Hatta kullanıcıya ınput valuesu bu diye uyarı versın.
// birazda stillendirin

btn.addEventListener('click',()=>{
    wrapper.innerHTML=''
    let div = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')

    let kutle = Number(inp.value)/9.8

    if(select.value == 'earth'){
        img.src='./img/earth.png'
        p.innerHTML = `${(kutle * 9.8).toFixed(2)} ${select.value} gezegenindeki ağırlıgın`
    }else if(select.value == 'jupiter'){
        img.src ='./img/jupiter.png'
        p.innerHTML = `${(kutle * 24.8).toFixed(2)} ${select.value} gezegenindeki ağırlıgın`
    }else if(select.value == 'mars'){
        img.src ='./img/mars.png'
        p.innerHTML = `${(kutle * 3.7).toFixed(2)} ${select.value} gezegenindeki ağırlıgın`
    }else if(select.value == 'mercury'){
        p.innerHTML = `${(kutle * 3.7).toFixed(2)} ${select.value} gezegenindeki ağırlıgın`
        img.src ='./img/mercury.png'
    }else if(select.value == 'moon'){
        p.innerHTML = `${(kutle * 1.6).toFixed(2)} ${select.value} gezegenindeki ağırlıgın`
        img.src ='./img/moon.png'
    }else if(select.value == 'neptune'){
        p.innerHTML = `${(kutle * 11.15).toFixed(2)} ${select.value} gezegenindeki ağırlıgın`
        img.src ='./img/neptune.png'
    }else if(select.value == 'pluto'){
        p.innerHTML = `${(kutle * 0.62).toFixed(2)} ${select.value} gezegenindeki ağırlıgın`
        img.src ='./img/pluto.png'
    }else if(select.value == 'saturn'){
        p.innerHTML = `${(kutle * 10.44).toFixed(2)} ${select.value} gezegenindeki ağırlıgın`
        img.src ='./img/saturn.png'
    }else if(select.value == 'uranus'){
        p.innerHTML = `${(kutle * 8.9).toFixed(2)} ${select.value} gezegenindeki ağırlıgın`
        img.src ='./img/uranus.png'
    }else if(select.value == 'venus'){
        p.innerHTML = `${(kutle * 8.9).toFixed(2)} ${select.value} gezegenindeki ağırlıgın`
        img.src ='./img/venus.png'
    }
    
    div.append(img)
    div.append(p)
    wrapper.append(div)
})