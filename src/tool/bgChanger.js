const urlList = [
    "bg-genninja",
    "bg-zapdos",
    "bg-garvedoir",
    "bg-charizard",
    "bg-jigglypuff"
]

// get a random link from the picture link liste
export default function dynamicBG() {
    return urlList[Math.floor(Math.random() * urlList.length)]
}