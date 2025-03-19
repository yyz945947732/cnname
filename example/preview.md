
# API Preview

## cnname()

邱莹

## cnname("彭")

彭诚

## cnname(5)

戴军凌,丁珊伦,程曼,杨舒,姚仪

## cnname("姚", 5)

姚烽,姚勋奕,姚希,姚勋心,姚语

## cnname({ count: 5 })

严希,贾璇,曹欣渊,邱绮晓,程昱瑾

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

傅心心,邓勋勋,邓弘弘,洪希希,何昭昭

## cnname({ count: 5, surname: "张" })

张璇,张贺馨,张东林,张炫,张昊

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张锡棠,张敏毓,张雅华,张清麟,张鹰浩

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊鹰,李俊皓,李俊良,李俊嫣,李俊汶

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张诗英,张修英,张睿英,张锴英,张峻英

## cnname({ count: 5, unique: true, part: "surname" })

吕,沈,陈,熊,赵

## cnname({ count: 5, unique: true, part: "givenName" })

可,钧,燕灿,槿雀,槿

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

瓮悠,赏博,管希,牟旭,卜妍

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

太叔嫣,淳于妮,百里华,太叔义,公羊珍

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

韩梅,卢炜,朱洁,梁庆,侯子

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

金梦,吕芷,钱曦,郑竹,曾瑜

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

司空蝉,上官星,尉迟妍,上官煜,司马澜

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

李锐伦,张铭钦,李柳,张莹松,张峰

## cnname({ count: 5, unique: true, givenNameType: "male" })

孙辉,黄皓志,闫承,马承智,曹博

## cnname({ count: 5, unique: true, givenNameType: "female" })

吴茵丽,董歆玲,黎燕,夏侯茹,孔彩萱

## cnname({ count: 5, unique: true, givenNameType: "metal" })

潘锐,何佳锋,罗钦,常锡钰,唐铄

## cnname({ count: 5, unique: true, givenNameType: "wood" })

吕松澜,何柏运,潘枫泽,魏梧,江枫梧

## cnname({ count: 5, unique: true, givenNameType: "water" })

樊源,熊泷,蔡海,乔泽,白南涵

## cnname({ count: 5, unique: true, givenNameType: "fire" })

沈凌炎,谢曦,郝晖,陈曦,翟炜

## cnname({ count: 5, unique: true, givenNameType: "earth" })

方琪境,谢岳,胡基,杨彬峥,程岱

## cnname({ count: 5, unique: true, givenNameType: "animal" })

季彪,武林鹿,陶信鹰,郝龙,石凤

## cnname({ count: 5, unique: true, givenNameType: "all" })

马杰,孙樱,熊烨秋,蔡基宏,莫翊运

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

郑城,蒋梅坤,陈绮基,任均颖,彭峥英

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

曾泽,蔡淇,金淇,曹泷,钟焱滨

## cnname({ count: 5, unique: true, gender: "female" })

高珊霄,何康惠,范俐茜,何康颖,颜霞

## cnname({ count: 5, unique: true, elements: "fire" })

姚炫腾,赵晖,周煜毓,谢烽晖,贾旭衡

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

乔沐岱,汤垚,肖泷境,韩源城,叶培

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

王,李,张,陈,刘,杨,黄,胡,赵,周,吴,徐,孙,宋,朱,马,郭,高,曹,林,梁,何,罗,郑,韩,谢,唐,董,傅,冯,许,袁,薛,姚,于,彭,肖,曾,谭,卢,苏,贾,毛,夏,余,邓,闫,戴,江,叶,丁,蔡,程,石,钟,廖,田,任,汪,范,方,潘,杜,魏,沈,万,熊,金,陆,郝,孔,白,崔,康,吕,邱,秦,蒋,姜,史,顾,侯,邵,孟,邹,段,钱,汤,黎,莫,常,尹,武,乔,贺,赖,龚,文,易,洪,庞,龙,殷,施,樊,翟,安,颜,齐,严,涂,陶,温,麦,季,俞,章,鲁,葛,伍,韦,申,尤,毕,聂,娄,焦,向,雷,柳,上官,欧阳,皇甫,司马,夏侯,诸葛,东方,尉迟,公孙,慕容,司徒,司空,令狐,轩辕,宇文,澹台

## getAllSurname("common").length

146

## getAllSurname("common-compound")

上官,欧阳,皇甫,司马,夏侯,诸葛,东方,尉迟,公孙,慕容,司徒,司空,令狐,轩辕,宇文,澹台

## getAllSurname("common-compound").length

16

## getAllSurname("common-single")

王,李,张,陈,刘,杨,黄,胡,赵,周,吴,徐,孙,宋,朱,马,郭,高,曹,林,梁,何,罗,郑,韩,谢,唐,董,傅,冯,许,袁,薛,姚,于,彭,肖,曾,谭,卢,苏,贾,毛,夏,余,邓,闫,戴,江,叶,丁,蔡,程,石,钟,廖,田,任,汪,范,方,潘,杜,魏,沈,万,熊,金,陆,郝,孔,白,崔,康,吕,邱,秦,蒋,姜,史,顾,侯,邵,孟,邹,段,钱,汤,黎,莫,常,尹,武,乔,贺,赖,龚,文,易,洪,庞,龙,殷,施,樊,翟,安,颜,齐,严,涂,陶,温,麦,季,俞,章,鲁,葛,伍,韦,申,尤,毕,聂,娄,焦,向,雷,柳

## getAllSurname("common-single").length

130

## cnnamestr()

孔岚

## cnnamestr("彭")

彭曦天

## cnnamestr(5)

胡烁,程铮,孙芸,刘逸雅,沈翼子

## cnnamestr("姚", 5)

姚运,姚波宏,姚焱斌,姚林烨,姚茜运

## cnnamestr({ count: 5 })

梁曦,汪竹萧,蔡玲,姚骏,吴毓

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

江景景,许豪豪,闫绣绣,武翰翰,余瑜瑜

## parseName("张三")

{"surname":"张","givenName":"三","givenNameLength":1,"isCompoundSurname":false,"isSingleCharacterSurname":true,"isGivenNameDuplicated":false,"isCommonSurname":true}

## parseName("笑三")

{"surname":"","givenName":"笑三","givenNameLength":2,"isCompoundSurname":false,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false,"isCommonSurname":false}

## parseName("三")

{"surname":"","givenName":"三","givenNameLength":1,"isCompoundSurname":false,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false,"isCommonSurname":false}

## parseName("")

{"surname":"","givenName":"","givenNameLength":0,"isCompoundSurname":false,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false,"isCommonSurname":false}

## parseName("欧阳三")

{"surname":"欧阳","givenName":"三","givenNameLength":1,"isCompoundSurname":true,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false,"isCommonSurname":true}

## parseName("欧阳娜娜")

{"surname":"欧阳","givenName":"娜娜","givenNameLength":2,"isCompoundSurname":true,"isSingleCharacterSurname":false,"isGivenNameDuplicated":true,"isCommonSurname":true}

## getSurname()

郝

## getSurname(5)

王,程,许,毛,常

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

令狐,欧阳,司空,上官,轩辕

## getGivenName()

晖

## getGivenName(5)

瑜,桂宸,洁鹿,洁,淼艳

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

焱焱,森森,绮绮,铮铮,曼曼
