# API Preview

## getName()

付棣焕

## getName("彭")

彭燕茗

## getName(5)

伍富修,秦铠,梁焕志,王萍,严茹绣

## getName("姚", 5)

姚斌昆,姚蓝,姚瑶,姚涛梧,姚炫

## getName({ count: 5 })

陆尧碧,崔灿腾,梁劲,程慧,熊康雪

## getName({ count: 5, unique: true, givenNameDuplicated: true })

熊鸿鸿,牛劲劲,伍祥祥,贺翊翊,肖白白

## getName({ count: 5, surname: "张" })

张可均,张洁,张柔晔,张贺,张金燕

## getName({ count: 5, surname: "张", givenNameLength: 2 })

张蓝锡,张朗钊,张冠昀,张昕芊,张林茵

## getName({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊颖,李俊希,李俊燕,李俊哲,李俊艳

## getName({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张培英,张舒英,张伊英,张昊英,张伊英

## getName({ count: 5, unique: true, returnType: "surname" })

刘,吴,邹,伍,肖

## getName({ count: 5, unique: true, returnType: "givenName" })

琦娜,丽然,锦鼎,梧,翠磊

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "all", givenNameLength: 1 })

九安,农娜,庞垚,车昭,何琳

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "all", givenNameLength: 1 })

谷梁依,万俟淞,濮阳栋,巫马光,宇文瑜

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "common", givenNameLength: 1 })

倪露,伍杉,雷希,周彦,金绣

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "common", givenNameLength: 1 })

夏侯烽,司徒秀,欧阳德,令狐烁,诸葛松

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "rare", givenNameLength: 1 })

威英,璩子,臧凌,嵇鹰,堵宇

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "rare", givenNameLength: 1 })

轩辕焕,澹台泉,漆雕天,淳于绣,东方白

## getName({ count: 5, unique: true, surname: ["张", "李"] })

张钰,张桂,张丽,李良,张哲帆

## getName({ count: 5, unique: true, surname: "关" })

关利曦,关紫健,关军淞,关蔚婷,关琦

## getName({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

赵穗宁,赵小桐,郭小桐,夏穗宁,郑穗宁

## getName({ count: 5, unique: true, givenName: "佳运" })

汪佳运,康佳运,陶佳运,李佳运,赵佳运

## getName({ count: 5, unique: true, givenNameAttributes: "male" })

李宇,谢依炎,常星健,唐鑫锐,汤维峻

## getName({ count: 5, unique: true, givenNameAttributes: "female" })

文思,孟妍雯,毕晶,田萧梦,金婉

## getName({ count: 5, unique: true, givenNameAttributes: "metal" })

成钦,黄钟少,毛镇,谢锋钦,张锐钰

## getName({ count: 5, unique: true, givenNameAttributes: "wood" })

洪柏,孔松松,邵森,高榆榆,殷柏栩

## getName({ count: 5, unique: true, givenNameAttributes: "water" })

陶礼淞,宋淞,龚洪,冯清,范波洁

## getName({ count: 5, unique: true, givenNameAttributes: "fire" })

贾昕霄,庞煜,任灿,钟暃,申南炫

## getName({ count: 5, unique: true, givenNameAttributes: "earth" })

黄峥,易培,钟基磊,陶垚,孔彬

## getName({ count: 5, unique: true, givenNameAttributes: "animal" })

袁蝶奇,夏凤凌,叶凤,姜龙,李翊燕

## getName({ count: 5, unique: true, givenNameAttributes: "color" })

邹绯安,段懿彩,高碧依,蔡红,肖青

## getName({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] })

汪樱基,徐崧柔,金磊雯,黎岳,武峰

## getName({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] })

毛湛,田涵煜,钱泽,吴淼,包波

## getName({ count: 5, unique: true, gender: "female" })

史芳,邵霜,梁珂娜,潘嫣,王汶

## getName({ count: 5, unique: true, wuxing: "fire" })

曹殷晗,郑晖,邹晖,沈炫,倪焱

## getName({ count: 5, unique: true, wuxing: "earth", givenNameAttributes: "water" })

王境波,申岱,秦源城,程岚泓,龙峥

## getName({ count: 10, unique: true, surnamePickStrategy: "random" })

魏桂杰,牛莉天,魏诗,武庆,沈辰峰,申红峰,阎皓锦,简柔,何承涛,史军良

## getName({ count: 10, unique: true, surnamePickStrategy: "weight" })

姜扬,冯娇洪,方修鹤,何昱樱,田昆,秦岳,林锐,王鹰哲,曾亮,王紫

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurnames("common")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,郭,何,林,高,罗,郑,梁,谢,宋,唐,许,邓,韩,冯,曹,彭,曾,肖,田,董,潘,袁,蔡,蒋,余,于,杜,叶,程,魏,苏,吕,丁,任,卢,姚,沈,钟,姜,崔,谭,陆,汪,范,廖,石,金,韦,贾,夏,付,方,邹,熊,白,孟,秦,邱,侯,江,尹,薛,闫,雷,龙,黎,史,陶,贺,毛,段,郝,顾,龚,邵,覃,武,钱,戴,严,莫,孔,常,汤,赖,萧,傅,阎,包,康,伍,施,万,洪,庞,樊,季,庄,殷,温,倪,翟,申,向,齐,乔,文,安,易,颜,牛,岳,简,骆,毕,章,鲁,关,葛,柳,俞,聂,蓝,祝,柴,纪,焦,祁,耿,邢,尚,芦,成,涂,麦,欧阳,上官,皇甫,令狐,诸葛,司徒,司马,申屠,夏侯,慕容,尉迟,长孙

## getAllSurnames("common").length

162

## getAllSurnames("common", "compound")

欧阳,上官,皇甫,令狐,诸葛,司徒,司马,申屠,夏侯,慕容,尉迟,长孙

## getAllSurnames("common", "compound").length

12

## getAllSurnames("common", "single")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,郭,何,林,高,罗,郑,梁,谢,宋,唐,许,邓,韩,冯,曹,彭,曾,肖,田,董,潘,袁,蔡,蒋,余,于,杜,叶,程,魏,苏,吕,丁,任,卢,姚,沈,钟,姜,崔,谭,陆,汪,范,廖,石,金,韦,贾,夏,付,方,邹,熊,白,孟,秦,邱,侯,江,尹,薛,闫,雷,龙,黎,史,陶,贺,毛,段,郝,顾,龚,邵,覃,武,钱,戴,严,莫,孔,常,汤,赖,萧,傅,阎,包,康,伍,施,万,洪,庞,樊,季,庄,殷,温,倪,翟,申,向,齐,乔,文,安,易,颜,牛,岳,简,骆,毕,章,鲁,关,葛,柳,俞,聂,蓝,祝,柴,纪,焦,祁,耿,邢,尚,芦,成,涂,麦

## getAllSurnames("common", "single").length

150

## getAllSurnames().length

1097

## getAllSurnames("rare").length

935

## getAllSurnames("rare", "compound").length

56

## getAllSurnames("rare", "single").length

879

## getNameStr()

倪铭杰

## getNameStr("彭")

彭昊蝉

## getNameStr(5)

雷墨,蔡一,冯全,马晖,黄瑞

## getNameStr("姚", 5)

姚晨仪,姚珂淞,姚铠渊,姚雪瑶,姚乔

## getNameStr({ count: 5 })

毛斌,蒋奕,覃穗新,龚梧,朱晓

## getNameStr({ count: 5, unique: true, givenNameDuplicated: true })

李勇勇,钱霖霖,赖炫炫,田乔乔,郭梅梅

## parseName("张三")

{"surname":"张","givenName":"三","fullName":"张三","isValidName":true,"givenNameLength":1,"isCompoundSurname":false,"isSingleCharacterSurname":true,"isGivenNameDuplicated":false}

## parseName("笑三")

{"surname":"","givenName":"笑三","fullName":"笑三","isValidName":false,"givenNameLength":2,"isCompoundSurname":false,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false}

## parseName("三")

{"surname":"","givenName":"三","fullName":"三","isValidName":false,"givenNameLength":1,"isCompoundSurname":false,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false}

## parseName("")

{"surname":"","givenName":"","fullName":"","givenNameLength":0,"isValidName":false,"isCompoundSurname":false,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false}

## parseName("欧阳三")

{"surname":"欧阳","givenName":"三","fullName":"欧阳三","isValidName":true,"givenNameLength":1,"isCompoundSurname":true,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false}

## parseName("欧阳娜娜")

{"surname":"欧阳","givenName":"娜娜","fullName":"欧阳娜娜","isValidName":true,"givenNameLength":2,"isCompoundSurname":true,"isSingleCharacterSurname":false,"isGivenNameDuplicated":true}

## getSurname()

贾

## getSurname(5)

程,袁,黄,姜,徐

## getGivenName()

远

## getGivenName(5)

瑜,雨燕,乐,佩勇,晖贺
