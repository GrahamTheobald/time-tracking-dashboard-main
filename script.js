import data from "./data.json" assert {type: "json"}

const dashboard = document.querySelector(".dashboard")
const template = document.querySelector("#template").content

const IMG_MAP = {
    Play: {
        src: "./images/icon-play.svg",
        bg: "hsl(195, 74%, 62%)",
    },
    Exercise: {
        src: "./images/icon-exercise.svg",
        bg: "hsl(145, 58%, 55%)",
    },
    'Self Care': {
        src: "./images/icon-self-care.svg",
        bg: "hsl(43, 84%, 65%)",
    },
    Social: {
        src: "./images/icon-social.svg",
        bg: "hsl(264, 64%, 52%)",
    },
    Study: {
        src: "./images/icon-study.svg",
        bg: "hsl(348, 100%, 68%)",
    },
    Work: {
        src: "./images/icon-work.svg",
        bg: "hsl(15, 100%, 70%)",
    },
}

data.forEach(dat => {
    dashboard.appendChild(renderTemplate(dat))
})

function renderTemplate(data) {
    const activityTemplate = template.cloneNode(true) 
    const title = data.title
    activityTemplate.querySelector(".icon").src = IMG_MAP[`${title}`].src
    activityTemplate.querySelector(".title").textContent = title
    activityTemplate.querySelector(".accent").style.backgroundColor = IMG_MAP[`${title}`].bg
    renderTemplateTimeframe(data, activityTemplate, "daily")
    renderTemplateTimeframe(data, activityTemplate, "weekly")
    renderTemplateTimeframe(data, activityTemplate, "monthly")
    return activityTemplate

    
}

function renderTemplateTimeframe(data, template, timeframe) {
    template.querySelector(`.${timeframe}-current`).textContent = data.timeframes[`${timeframe}`].current
    template.querySelector(`.${timeframe}-previous`).textContent = data.timeframes[`${timeframe}`].previous

}
