# API Preview

## getName()

王潇雨

## getName("彭")

彭晓

## getName(5)

廖心,刘钰德,贾楠祥,涂怡钟,唐嫣岳

## getName("姚", 5)

姚晨凌,姚亦蝉,姚菁华,姚昱,姚语彤

## getName({ count: 5 })

付芮,孙俐,吴宸,翟倩杉,崔琪凯

## getName({ count: 5, unique: true, givenNameDuplicated: true })

唐焱焱,陶烽烽,曹梅梅,庄潇潇,秦永永

## getName({ count: 5, surname: "张" })

张柯镇,张妙柏,张峥柔,张晖凌,张贺

## getName({ count: 5, surname: "张", givenNameLength: 2 })

张威娇,张彬辉,张伦炜,张慧纶,张子林

## getName({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊芊,李俊纶,李俊仪,李俊明,李俊妙

## getName({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张辉英,张信英,张彩英,张卓英,张茵英

## getName({ count: 5, unique: true, returnType: "surname" })

陶,冯,邓,严,徐

## getName({ count: 5, unique: true, returnType: "givenName" })

晨,文,婷,鲸贺,城

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "all", givenNameLength: 1 })

终沐,娄凌,项铄,浦奇,田莹

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "all", givenNameLength: 1 })

欧阳毓,仲孙乐,夏侯蝉,公孙静,申屠悠

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "common", givenNameLength: 1 })

毕鹿,杜伟,施媛,孙峰,胡威

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "common", givenNameLength: 1 })

尉迟松,尉迟婷,诸葛鹿,皇甫宸,申屠媛

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "rare", givenNameLength: 1 })

学轩,穆骏,夙栋,双卓,世嘉

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "rare", givenNameLength: 1 })

谷梁鱼,东方文,濮阳善,巫马俊,壤驷睿

## getName({ count: 5, unique: true, surname: ["张", "李"] })

张卓炎,李锦铭,李秋娇,李怡婉,张皓翊

## getName({ count: 5, unique: true, surname: "关" })

关杰梅,关霜,关芳惠,关欣,关岱良

## getName({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

谢小桐,陶穗宁,伍小桐,倪小桐,武穗宁

## getName({ count: 5, unique: true, givenName: "佳运" })

潘佳运,梁佳运,方佳运,崔佳运,万佳运

## getName({ count: 5, unique: true, givenNameAttributes: "male" })

贾瑞,叶野,韦鸿,吕杰,熊军轩

## getName({ count: 5, unique: true, givenNameAttributes: "female" })

付姬,徐艳,邓霜绣,刘南颖,贺蔚

## getName({ count: 5, unique: true, givenNameAttributes: "metal" })

萧铄鑫,韩锦,魏钟,黄钦,柴锦晨

## getName({ count: 5, unique: true, givenNameAttributes: "wood" })

包铭楠,蔡槿云,黄榆,沈森桦,高榆

## getName({ count: 5, unique: true, givenNameAttributes: "water" })

余洁洁,汤泉,徐渊,徐康泷,贺渊

## getName({ count: 5, unique: true, givenNameAttributes: "fire" })

赵旭,赵煜峥,魏炫,余曦逸,孙焕烽

## getName({ count: 5, unique: true, givenNameAttributes: "earth" })

邵坤腾,朱坤,向坤,徐峻哲,谭峥

## getName({ count: 5, unique: true, givenNameAttributes: "animal" })

程龙,毕麟晗,包龙,罗南麟,史彬彪

## getName({ count: 5, unique: true, givenNameAttributes: "all" })

纪善尧,尹锦,黎义,赖铄,包维焱

## getName({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] })

黄城慧,文垚,吴洁培,韦基燕,洪均

## getName({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] })

尹煜洁,吴泉,史泉,包涵烁,马滨

## getName({ count: 5, unique: true, gender: "female" })

白芮,程珍,于凤莹,熊霞,邓妍

## getName({ count: 5, unique: true, wuxing: "fire" })

彭炫烁,李晖旭,江晖,程翊炫,周曦

## getName({ count: 5, unique: true, wuxing: "earth", givenNameAttributes: "water" })

杜滨培,孟坤洁,杨基,崔岚淇,何垚滨

## getName({ count: 10, unique: true, surnamePickStrategy: "random" })

倪岱,包炫辰,萧奇,骆庆翊,文宁钟,长孙嫣妙,申鹤峰,陈霜,康祺然,令狐培麟

## getName({ count: 10, unique: true, surnamePickStrategy: "weight" })

许琦鹤,马炫昕,段泷榆,李乐钟,余悠铄,曾琦嫣,范芸,熊桂,唐希基,田凯

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

1095

## getAllSurnames("rare").length

933

## getAllSurnames("rare", "compound").length

56

## getAllSurnames("rare", "single").length

877

## getNameStr()

覃垚

## getNameStr("彭")

彭展逸

## getNameStr(5)

李坤,周澜,薛昭,严佳,郝铠翰

## getNameStr("姚", 5)

姚康,姚智凤,姚蔚华,姚茹奇,姚睿柳

## getNameStr({ count: 5 })

史沐冠,潘敏,唐栋,何辰,于蝶凤

## getNameStr({ count: 5, unique: true, givenNameDuplicated: true })

付霞霞,季滨滨,贺栋栋,张子子,赵锋锋

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

程

## getSurname(5)

龙,戴,萧,宋,谢

## getSurname({ count: 5, surnameType: "compound", unique: true })

上官,欧阳,皇甫,夏侯,诸葛

## getGivenName()

麟韵

## getGivenName(5)

祺,榆婷,文,英义,彬浩

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

哲哲
