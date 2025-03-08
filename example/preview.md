
# API Preview

## cnname()

理恒

## cnname("彭")

彭群莎

## cnname(5)

寿琰,翟榕,令狐瑶昕,守之康,储驰

## cnname("姚", 5)

姚清艺,姚雷童,姚雅,姚才,姚舞菲

## cnname({ count: 5 })

申启,王永,乜宜峰,原弘泉,司川固

## cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true })

雀枫枫,青亚亚,巴寒寒,濮阳月月,穆辉辉

## cnname({ count: 5, surname: "张" })

张凌,张信,张琼,张逸欣,张军娅

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张民彦,张江厚,张涛光,张旭勇,张耀电

## cnname({ count: 5, unique: true, nameType: "surname" })

姒,钦,书,求,贲

## cnname({ count: 5, unique: true, nameType: "givenName" })

枝,鸿宁,河时,松澜,芬

## cnname({ count: 5, unique: true, surnameType: "single", givenNameLength: 1 })

卷博,汉俭,督森,尚利,衅舞

## cnname({ count: 5, unique: true, surnameType: "compound", givenNameLength: 1 })

宗政佳,宰父彬,荔菲旺,宇文翎,宰父蓉

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

司空喜,施涛,澹台涵,廉忠,萧志

## cnname({ count: 5, unique: true, surnameType: "single-common", givenNameLength: 1 })

万智,庞眉,傅彩,于曦,丁禄

## cnname({ count: 5, unique: true, surnameType: "compound-common", givenNameLength: 1 })

皇甫画,公良震,司徒祺,令狐瀚,上官杰

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

李城,李中,张成,李红远,张华雪

## getSurname()

别

## getSurname(5)

伟,潮,犁,少,漆雕

## getCompoundSurname()

上官

## getCompoundSurname(5)

万俟,万俟,羊舌,乐正,辗迟

## getGivenName()

姬兰

## getGivenName(5)

聪霜,轮莺,栋昕,然炜,彦

## isSurname("张")

true

## isSurname("笑")

false
