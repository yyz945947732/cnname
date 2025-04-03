# API Preview

## cnname()

肖凡

## cnname("彭")

彭楠彦

## cnname(5)

司徒利,周艳,韦珂鲸,冯锡桦,徐浩

## cnname("姚", 5)

姚翊,姚敏柳,姚婷汶,姚雨,姚昱

## cnname({ count: 5 })

薛妙,余翰,曾泷,邱伟城,陶善

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

卢淇淇,熊敏敏,丁东东,贾运运,洪锦锦

## cnname({ count: 5, surname: "张" })

张楠昭,张均,张鱼,张乔栩,张凤

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张煜卫,张燕英,张南丽,张蝶旭,张皓锴

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊峻,李俊慧,李俊欣,李俊凤,李俊乔

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张烽英,张棠英,张亮英,张琳英,张鸿英

## cnname({ count: 5, unique: true, returnType: "surname" })

刘,白,申屠,罗,易

## cnname({ count: 5, unique: true, returnType: "givenName" })

博宾,宏,龙义,柯,鱼

## cnname({ count: 5, unique: true, surnameType: "single", surnameRarity: "all", givenNameLength: 1 })

竭桂,杭渊,霍昊,廉锴,家俪

## cnname({ count: 5, unique: true, surnameType: "compound", surnameRarity: "all", givenNameLength: 1 })

万俟娇,羊舌楠,公西翼,慕容妙,令狐咏

## cnname({ count: 5, unique: true, surnameType: "single", surnameRarity: "common", givenNameLength: 1 })

赵君,康锋,倪克,田运,尹永

## cnname({ count: 5, unique: true, surnameType: "compound", surnameRarity: "common", givenNameLength: 1 })

皇甫安,令狐瑾,夏侯曦,司马宇,司马焕

## cnname({ count: 5, unique: true, surnameType: "single", surnameRarity: "rare", givenNameLength: 1 })

隆锋,卜姬,墨霜,管翰,芮弘

## cnname({ count: 5, unique: true, surnameType: "compound", surnameRarity: "rare", givenNameLength: 1 })

濮阳彪,钟离萧,东方敏,东郭贺,公西波

## cnname({ count: 5, unique: true, surname: ["张", "李"] })

李俐仪,张榆,张炫,张妍康,张珍

## cnname({ count: 5, unique: true, surname: "关" })

关晓,关鱼,关悠,关豪,关坤

## cnname({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

侯小桐,崔穗宁,孙穗宁,王小桐,夏穗宁

## cnname({ count: 5, unique: true, givenName: "佳运" })

谢佳运,林佳运,殷佳运,袁佳运,金佳运

## cnname({ count: 5, unique: true, givenNameAttributes: "male" })

胡炜祥,彭朗,李勇伦,贾昕华,苏勋东

## cnname({ count: 5, unique: true, givenNameAttributes: "female" })

吕瑶,李芮,何思荣,余丽,任沐远

## cnname({ count: 5, unique: true, givenNameAttributes: "metal" })

葛铠,秦钟,赵琪锡,孟鑫,文铠宏

## cnname({ count: 5, unique: true, givenNameAttributes: "wood" })

王桂,朱乔栩,廖栋枫,彭榆桦,程榆

## cnname({ count: 5, unique: true, givenNameAttributes: "water" })

许沐,邱泽,毛泽,沈诚泉,邓滨

## cnname({ count: 5, unique: true, givenNameAttributes: "fire" })

付炫旭,袁航焱,严炫烨,雷曦,韩烈晖

## cnname({ count: 5, unique: true, givenNameAttributes: "earth" })

任亦峰,柴峻,蒋境,徐境均,尚磊全

## cnname({ count: 5, unique: true, givenNameAttributes: "animal" })

季鹰林,龙蝉,白鹰,韩凤然,孙鲸航

## cnname({ count: 5, unique: true, givenNameAttributes: "all" })

萧博,何滨,姜伦,易嘉沐,周岚

## cnname({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] })

姜慧基,冯岩,白岱,邱基芷,黄岳颖

## cnname({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] })

俞晴涵,樊洁,岳泷,薛波,孙晴滨

## cnname({ count: 5, unique: true, gender: "female" })

汪美,肖凤凡,韩梅,刘穗,叶媛瑾

## cnname({ count: 5, unique: true, wuxing: "fire" })

马文烨,陆烁,汪烈,刘烈煜,戴焱晖

## cnname({ count: 5, unique: true, wuxing: "earth", givenNameAttributes: "water" })

章泷峥,林均,林岩,董峻,龚岳

## cnname({ count: 10, unique: true, surnamePickStrategy: "random" })

顾昀汶,蒋炜语,程源,段霞,郝乔嫣,戴永鹰,章翊钧,孙少,邓彪芳,文娇斌

## cnname({ count: 10, unique: true, surnamePickStrategy: "weight" })

郭心,曾境,毛钦心,周智,潘彦,夏逸榆,王滨洁,于楠莹,袁荣麟,金绮

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

## cnnamestr()

史劲柳

## cnnamestr("彭")

彭霄

## cnnamestr(5)

姚芊泷,贾榆骏,章妙彬,向宏,梁瑾

## cnnamestr("姚", 5)

姚梅,姚麟涛,姚垚信,姚槿,姚奕

## cnnamestr({ count: 5 })

孔曼,魏南潇,汪强,石奕森,雷冠华

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

马彩彩,郭焱焱,贾桂桂,董运运,孙鹤鹤

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

宋

## getSurname(5)

丁,金,柳,陈,林

## getSurname({ count: 5, surnameType: "compound", unique: true })

司徒,令狐,尉迟,申屠,司马

## getGivenName()

淇

## getGivenName(5)

林妙,钧睿,倩,芳,凯

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

殷殷
