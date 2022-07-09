import ethers from "ethers";
import abiDAI from "./jsonABIs/abiDAI.js";

// To convert normal(JSON) ABI to Human Readable format 
function getHumanReadable_ABI(normal_ABI) {
    const iface = new ethers.utils.Interface(normal_ABI);
    console.log(iface.format(ethers.utils.FormatTypes.full));
}

getHumanReadable_ABI(abiDAI)
