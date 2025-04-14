
import BlankImage from "../assets/no-image-placeholder.webp"

export const getCroppedImgUrl=(url:string)=>{
    if(!url) return BlankImage;
    const target='media/'
    const index=url.indexOf(target)+target.length
   return url.slice(0,index)+'crop/600/400/'+url.slice(index)
}