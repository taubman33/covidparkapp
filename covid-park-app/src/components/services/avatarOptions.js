const topType = ["NoHair", "Eyepatch", "Hat", "Hijab", "Turban", "WinterHat1", "WinterHat2", "WinterHat3", "WinterHat4", "LongHairBigHair", "LongHairBob", "LongHairBun", "LongHairCurly", "LongHairCurvy", "LongHairDreads", "LongHairFrida", "LongHairFro", "LongHairFroBand", "LongHairNotTooLong", "LongHairShavedSides", "LongHairMiaWallace", "LongHairStraight", "LongHairStraight2", "LongHairStraightStrand", "ShortHairDreads01", "ShortHairDreads02", "ShortHairFrizzle", "ShortHairShaggyMullet", "ShortHairShortCurly", "ShortHairShortFlat", "ShortHairShortRound", "ShortHairShortWaved", "ShortHairSides", "ShortHairTheCaesar", "ShortHairTheCaesarSidePart"]
const accessoriesType = ["Blank", "Kurt", "Prescription01", "Prescription02", "Round", "Sunglasses", "Wayfarers"]
const hairColor = ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "PastelPink", "Platinum", "Red", "SilverGray"]
const facialHairType = ["Blank", "BeardMedium", "BeardLight", "BeardMagestic", "MoustacheFancy", "MoustacheMagnum"]
const facialHairColor = ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark", "Platinum", "Red"]
const clotheType = ["BlazerShirt", "BlazerSweater", "CollarSweater", "GraphicShirt", "Hoodie", "Overall", "ShirtCrewNeck", "ShirtScoopNeck", "ShirtVNeck"]
const clotheColor = ["Black", "Blue01", "Blue02", "Blue03", "Gray01", "Gray02", "Heather", "PastelBlue", "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow", "Pink", "Red", "White"]
const eyeType = ["Close", "Cry", "Default", "Dizzy", "EyeRoll", "Happy", "Hearts", "Side", "Squint", "Surprised", "Wink", "WinkWacky"]
const eyebrowType = ["Angry", "AngryNatural", "Default", "DefaultNatural", "FlatNatural", "RaisedExcited", "RaisedExcitedNatural", "SadConcerned", "SadConcernedNatural", "UnibrowNatural", "UpDown", "UpDownNatural"]
const mouthType = ["Concerned", "Default", "Disbelief", "Eating", "Grimace", "Sad", "ScreamOpen", "Serious", "Smile", "Tongue", "Twinkle", "Vomit"]
const skinColor = ["Tanned", "Yellow", "Pale", "Light", "Brown", "DarkBrown", "Black"]
const style = ["Circle", "Transparent"]

const rand = (array) =>
{
    return array[Math.floor(Math.random() * array.length)]
}

export const GetRandomAvatarString = () => (`https://avatars.dicebear.com/api/avataaars/:${[...Array(10)].map(i => (~~(Math.random() * 36)).toString(36)).join('')}.svg`

    // `https://avataaars.io/?avatarStyle=${
    // style[1]
    // }&topType=${
    // rand(topType)
    // }&accessoriesType=${
    // rand(accessoriesType)
    // }&hairColor=${
    // rand(hairColor)
    // }&facialHairType=${
    // rand(facialHairType)
    // }&facialHairColor=${
    // rand(facialHairColor)
    // }&clotheColor=${
    // rand(clotheColor)
    // }&clotheType=${
    // rand(clotheType)
    // }&eyeType=${
    // rand(eyeType)
    // }&eyebrowType=${
    // rand(eyebrowType)
    // }&mouthType=${
    // rand(mouthType)
    // }&skinColor=${
    // rand(skinColor)
    // }`
)