import fs from "fs"
import nodeHtmlToImage from "node-html-to-image"

export const generateImage = (html: string = '', content = {}) => {
    return nodeHtmlToImage({
        output: './sampleImage.png',
        html,
        content,
        quality: 120
    })
    .then(() => {
        console.log('Image created successfully.')
    })
}

export const convertToBase64 = (image: string, imgExtension: 'png' | 'jpeg' | 'jpg' = 'png') => {
    const base64 = fs.readFileSync(image, {encoding: 'base64'});
    return 'data:image/'+imgExtension+';base64,' + base64;
}
