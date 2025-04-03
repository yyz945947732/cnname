# API Preview

## cnname()

崔妮

## cnname("彭")

彭尧殷

## cnname(5)

邓子,伍殷琪,方维,黄美,石铠岩

## cnname("姚", 5)

姚佳,姚栋,姚景,姚强,姚绮威

## cnname({ count: 5 })

郑奇鹤,段岚,潘灿坤,朱霏,乔翔霞

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

姚良良,闫凯凯,尚欣欣,武岚岚,程灿灿

## cnname({ count: 5, surname: "张" })

张烈,张洁奇,张芸,张懿纶,张瑶

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张峰毅,张茹秋,张翔瑾,张展军,张泷萧

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊超,李俊亦,李俊松,李俊敏,李俊煜

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张瑜英,张修英,张克英,张莹英,张翰英

## cnname({ count: 5, unique: true, returnType: "surname" })

林,苏,陈,蒋,邵

## cnname({ count: 5, unique: true, returnType: "givenName" })

智欣,亦,良艳,蝉南,昊

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

郝泷,柯峰,柏锋,针珊,操军

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

梁丘城,慕容渊,西门骏,申屠君,上官柏

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

阮健,龚安,唐昆,崔秋,杨鹰

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

邓晨,邱震,余铮,田祺,雷全

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

令狐辰,令狐晖,司马劲,慕容桂,申屠全

## cnname({ count: 5, unique: true, surname: ["张", "李"] })

李天,张秋棠,张绣,张凌,李烽

## cnname({ count: 5, unique: true, surname: "关" })

关毓舒,关心,关涵,关劲,关诚

## cnname({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

彭穗宁,叶穗宁,卢小桐,孙小桐,董穗宁

## cnname({ count: 5, unique: true, givenName: "佳运" })

聂佳运,侯佳运,龚佳运,曾佳运,武佳运

## cnname({ count: 5, unique: true, givenNameAttributes: "male" })

申杰,顾健,钟斌,高军峥,潘辉

## cnname({ count: 5, unique: true, givenNameAttributes: "female" })

文汶,蔡妮,韩萍绮,谭绣芸,郭茹

## cnname({ count: 5, unique: true, givenNameAttributes: "metal" })

罗镇,程钧,丁锐,钟皓铭,董镇竹

## cnname({ count: 5, unique: true, givenNameAttributes: "wood" })

段枫槿,蒋枫杉,罗翊杉,周杉,左柏

## cnname({ count: 5, unique: true, givenNameAttributes: "water" })

程泉伊,焦洁,倪源涛,贾泷,肖涵

## cnname({ count: 5, unique: true, givenNameAttributes: "fire" })

韩曦焕,曾炜,闫嘉烈,唐烁,黄烽烈

## cnname({ count: 5, unique: true, givenNameAttributes: "earth" })

侯城,韦岩,曹均梓,龚均,焦均峥

## cnname({ count: 5, unique: true, givenNameAttributes: "animal" })

王鹤,毛凤柯,曾鲸晨,朱彪,唐鲸

## cnname({ count: 5, unique: true, givenNameAttributes: "all" })

诸葛宸,杨妍,纪柳,赵岱柯,曾灿

## cnname({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] })

龙岳岑,钱岩尧,高垚,刘坤,欧坤

## cnname({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] })

石源,冯曦涛,朱烁源,陈淼,史滨

## cnname({ count: 5, unique: true, gender: "female" })

马绣敏,郑妮,吕姬芳,廖俪,包蔚灵

## cnname({ count: 5, unique: true, wuxing: "fire" })

倪烁,潘烈曦,孙炫,余晖烨,梁烨

## cnname({ count: 5, unique: true, wuxing: "earth", givenNameAttributes: "water" })

汤岩,徐岱,崔基,覃基泉,郭岳波

## cnname({ count: 10, unique: true, surnamePickStrategy: "random" })

方钧,汤富,白淇敏,雷潇志,韦浩柏,崔棠,凌诗玲,周利菁,胡秋诗,洪南栋

## cnname({ count: 10, unique: true, surnamePickStrategy: "weight" })

罗昊,赵榆卫,梁萍,谭晴富,邓彩阳,邓腾均,翟咏丽,易全洁,陶逸岑,冯岱烨

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,林,郭,何,高,罗,郑,梁,谢,宋,唐,许,冯,韩,邓,曹,彭,曾,肖,田,董,潘,袁,于,蒋,蔡,余,杜,叶,程,苏,魏,吕,丁,任,沈,姚,卢,姜,崔,钟,谭,陆,汪,范,廖,石,金,韦,贾,夏,傅,方,白,邹,孟,熊,秦,邱,江,尹,薛,闫,段,雷,侯,龙,史,陶,黎,贺,顾,毛,郝,龚,邵,赖,万,钱,严,覃,武,戴,莫,孔,向,汤,常,温,康,洪,施,文,牛,樊,葛,邢,安,齐,易,乔,伍,庞,颜,倪,庄,聂,章,鲁,岳,翟,殷,詹,申,欧,耿,关,兰,焦,俞,左,柳,甘,祝,包,宁,尚,符,舒,阮,柯,纪,梅,童,凌,毕,欧阳,上官,皇甫,令狐,诸葛,司徒,司马,申屠,夏侯,慕容,尉迟,长孙

## getAllSurname("common").length

162

## getAllSurname("common-compound")

欧阳,上官,皇甫,令狐,诸葛,司徒,司马,申屠,夏侯,慕容,尉迟,长孙

## getAllSurname("common-compound").length

12

## getAllSurname("common-single")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,林,郭,何,高,罗,郑,梁,谢,宋,唐,许,冯,韩,邓,曹,彭,曾,肖,田,董,潘,袁,于,蒋,蔡,余,杜,叶,程,苏,魏,吕,丁,任,沈,姚,卢,姜,崔,钟,谭,陆,汪,范,廖,石,金,韦,贾,夏,傅,方,白,邹,孟,熊,秦,邱,江,尹,薛,闫,段,雷,侯,龙,史,陶,黎,贺,顾,毛,郝,龚,邵,赖,万,钱,严,覃,武,戴,莫,孔,向,汤,常,温,康,洪,施,文,牛,樊,葛,邢,安,齐,易,乔,伍,庞,颜,倪,庄,聂,章,鲁,岳,翟,殷,詹,申,欧,耿,关,兰,焦,俞,左,柳,甘,祝,包,宁,尚,符,舒,阮,柯,纪,梅,童,凌,毕

## getAllSurname("common-single").length

150

## cnnamestr()

钟铭凌

## cnnamestr("彭")

彭焕鱼

## cnnamestr(5)

田军,阮鑫,蒋岩,郑鸿,何蔚

## cnnamestr("姚", 5)

姚培,姚钧媛,姚德,姚琪,姚熙哲

## cnnamestr({ count: 5 })

杜均,齐佩樱,余熙乐,温克,罗渊天

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

卢弘弘,杨柳柳,孔炜炜,温岱岱,钱澜澜

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

武

## getSurname(5)

冯,齐,包,戴,李

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

欧阳,上官,令狐,诸葛,司马

## getGivenName()

琳逸

## getGivenName(5)

瑜芊,皓,景敏,克志,静

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

瑜瑜
