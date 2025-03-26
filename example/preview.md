
# API Preview

## cnname()

段东博

## cnname("彭")

彭鹰

## cnname(5)

白焕,陈渊勇,何斌,柳珍贺,戴炫竹

## cnname("姚", 5)

姚岳,姚桂韬,姚芳野,姚殷航,姚东

## cnname({ count: 5 })

朱蝉,夏珊威,苏明柏,董远,杨光

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

冯思思,常澜澜,蔡炜炜,袁星星,林均均

## cnname({ count: 5, surname: "张" })

张天腾,张菁然,张豪,张汶雪,张钧

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张林彪,张哲然,张嫣梦,张野健,张基秋

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊铄,李俊克,李俊威,李俊境,李俊俪

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张涛英,张艳英,张展英,张妮英,张怡英

## cnname({ count: 5, unique: true, part: "surname" })

黄,吴,尹,申,秦

## cnname({ count: 5, unique: true, part: "givenName" })

熙慧,炎,嫣,均航,榆贺

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

止军,锐星,山菁,兴哲,伍康

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

左丘翼,公冶祺,濮阳岱,乐正晖,太叔妍

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

钱瑶,龚瑜,韩超,唐茵,钟昭

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

乔岱,胡韵,文蔚,谢焕,钱昱

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

欧阳珂,欧阳铭,公孙逸,司马永,欧阳宾

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张鼎,张翰汶,张晖,张锦,张翊

## cnname({ count: 5, unique: true, givenNameType: "male" })

江炜旭,尹辉,高锋维,张克,田弘

## cnname({ count: 5, unique: true, givenNameType: "female" })

孙哲穗,唐敏涵,曹晴皓,方芷,于雯逸

## cnname({ count: 5, unique: true, givenNameType: "metal" })

郑锋铮,薛锡云,樊铭,梁钦,吴镇

## cnname({ count: 5, unique: true, givenNameType: "wood" })

尹榆槿,邓森桂,朱柳,何桐,俞云楠

## cnname({ count: 5, unique: true, givenNameType: "water" })

闫泉,陈涵,江沐,于泷涵,戴泽修

## cnname({ count: 5, unique: true, givenNameType: "fire" })

叶烈焕,陈煜灿,黄乐煜,丁煜,尉迟焕烨

## cnname({ count: 5, unique: true, givenNameType: "earth" })

梁基,孙均岱,秦磊扬,姜峻,谢峥岳

## cnname({ count: 5, unique: true, givenNameType: "animal" })

叶鹿元,俞航燕,洪蝶,郭鹤泽,侯鱼

## cnname({ count: 5, unique: true, givenNameType: "all" })

张倩,郭君永,谢勇彤,潘倩,陆华

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

王磊彤,万峻,武佩境,陆培,曾惠峰

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

傅海,方灿泓,宋波,程滨,蒋泷

## cnname({ count: 5, unique: true, gender: "female" })

冯俪,孔依,文君娜,杜颖慧,郑尧

## cnname({ count: 5, unique: true, elements: "fire" })

毛晖,唐烨,黄焕煜,贺子烽,刘焱

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

杨洁城,卢滨培,崔磊泽,施城,黄峥

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

王,李,张,陈,刘,杨,黄,胡,赵,周,吴,徐,孙,宋,朱,马,郭,高,曹,林,梁,何,罗,郑,韩,谢,唐,董,傅,冯,许,袁,薛,姚,于,彭,肖,曾,谭,卢,苏,贾,毛,夏,余,邓,闫,戴,江,叶,丁,蔡,程,石,钟,廖,田,任,汪,范,方,潘,杜,魏,沈,万,熊,金,陆,郝,孔,白,崔,康,吕,邱,秦,蒋,姜,史,顾,侯,邵,孟,邹,段,钱,汤,黎,莫,常,尹,武,乔,贺,赖,龚,文,易,洪,庞,龙,殷,施,樊,翟,安,颜,齐,严,涂,陶,温,麦,季,俞,章,鲁,葛,伍,韦,申,尤,毕,聂,娄,焦,关,雷,柳,上官,欧阳,皇甫,司马,夏侯,诸葛,东方,尉迟,公孙,慕容,司徒,司空,令狐,轩辕,宇文,澹台

## getAllSurname("common").length

146

## getAllSurname("common-compound")

上官,欧阳,皇甫,司马,夏侯,诸葛,东方,尉迟,公孙,慕容,司徒,司空,令狐,轩辕,宇文,澹台

## getAllSurname("common-compound").length

16

## getAllSurname("common-single")

王,李,张,陈,刘,杨,黄,胡,赵,周,吴,徐,孙,宋,朱,马,郭,高,曹,林,梁,何,罗,郑,韩,谢,唐,董,傅,冯,许,袁,薛,姚,于,彭,肖,曾,谭,卢,苏,贾,毛,夏,余,邓,闫,戴,江,叶,丁,蔡,程,石,钟,廖,田,任,汪,范,方,潘,杜,魏,沈,万,熊,金,陆,郝,孔,白,崔,康,吕,邱,秦,蒋,姜,史,顾,侯,邵,孟,邹,段,钱,汤,黎,莫,常,尹,武,乔,贺,赖,龚,文,易,洪,庞,龙,殷,施,樊,翟,安,颜,齐,严,涂,陶,温,麦,季,俞,章,鲁,葛,伍,韦,申,尤,毕,聂,娄,焦,关,雷,柳

## getAllSurname("common-single").length

130

## cnnamestr()

杨明

## cnnamestr("彭")

彭伟

## cnnamestr(5)

蒋栩铠,郭扬军,唐希,武珂,尹亦

## cnnamestr("姚", 5)

姚志,姚修鹰,姚辉,姚君懿,姚彩

## cnnamestr({ count: 5 })

苏慧媛,许鲸龙,姜瑾,赖利境,温信

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

万汶汶,程怡怡,江俊俊,吕鸿鸿,崔然然

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

毛

## getSurname(5)

夏,余,薛,丁,徐

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

尉迟,上官,夏侯,欧阳,诸葛

## getGivenName()

烨

## getGivenName(5)

槿柯,明善,茜澜,冠,鑫焱

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

炜炜,懿懿,俊俊,槿槿,信信
