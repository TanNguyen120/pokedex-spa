const urlList = [
    "bg-genninja",
    "bg-zapdos",
    "bg-garvedoir",
    "bg-charizard",
    "bg-jigglypuff"
]

// get a random link from the picture link liste
export default function dynamicBG() {
    console.log(urlList[Math.floor(Math.random() * urlList.length)]);
    return urlList[Math.floor(Math.random() * urlList.length)]
}