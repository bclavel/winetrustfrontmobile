export default function( product = {}, action) {
    if (action.type === 'scanproduct') {
        var productCopy = {
            ...product,
            ownerAddressEth: action.ownerAddressEth,
            productStatus: action.productStatus,
            producerHash: action.producerHash,
            productHash: action.productHash,
            productCreationDate: action.productCreationDate,
            productAddressEth: action.productAddressEth,
            producerAddressEth: action.producerAddressEth,
            productDomaine: action.productDomaine,
            productCuvee: action.productCuvee,
            productYoutube: action.productYoutube,
            productDeskImg: action.productDeskImg,
            productMobImg: action.productMobImg,
            productMillesime: action.productMillesime,
            productCepages: action.productCepages,
            productAppellation: action.productAppellation,
            productRegion: action.productRegion,
            productCountry: action.productCountry,
            productQuality: action.productQuality,
            domainHistory : action.domainHistory,
            productAccords: action.productAccords,
            domainPostalAddress: action.domainPostalAddress,
            domainUrl: action.domainUrl,
            domainFacebook: action.domainFacebook,
            domainEmail: action.domainEmail
        }
        console.log(action)

    }
}