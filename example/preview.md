
# API Preview

## cnname()

仰友

## cnname("彭")

彭昊飞

## cnname(5)

励君琬,璩以,吾翎娴,冼凌,库凤

## cnname("姚", 5)

姚书宜,姚锦,姚瑾,姚凡,姚厚茗

## cnname({ count: 5 })

休闻,束雄,么伯静,钟离宜博,春娜

## cnname({ count: 5, unique: true, onlyRepeatedGivenName: true })

惠毅毅,宿筠筠,错勤勤,阚舒舒,艾枫枫

## cnname({ count: 5, surname: "张" })

张斌,张春,张梅,张武,张聪

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张莲凡,张克美,张炜萍,张士卿,张翊絮

## cnname({ count: 5, unique: true, nameType: "surname" })

闻,文,印,费,闵

## cnname({ count: 5, unique: true, nameType: "givenName" })

毓,晨,涛,利冰,朋

## cnname({ count: 5, unique: true, surnameType: "single", givenNameLength: 1 })

佴青,謇勤,戢菲,千昕,绪涛

## cnname({ count: 5, unique: true, surnameType: "compound", givenNameLength: 1 })

司徒景,梁丘卓,锺离赋,闻人策,夹谷楠

## cnname({ count: 5, unique: true, onlyCommonSurname: true })

徐邦,孙枝,韩宾可,陶顺富,陈丽芳

## cnname({ count: 5, unique: true, onlyCommonSurname: true, nameType: "surname" })

邵,梁,郑,乔,毛

## getSurname()

邸

## getSurname(5)

庹,太叔,谯,刀,谷梁

## getCompoundSurname()

仲孙

## getCompoundSurname(5)

呼延,凃肖,慕容,欧阳,慕容

## getGivenName()

佳融

## getGivenName(5)

策宜,贵诚,政,湖璐,磊行

## isSurname("张")

true

## isSurname("笑")

false
