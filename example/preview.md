# API Preview

## getName()

郭渊

## getName("彭")

彭澜煜

## getName(5)

武源晨,罗榆,黄梓,伍义,杨敏

## getName("姚", 5)

姚昱衡,姚镇铠,姚婷,姚良泉,姚远

## getName({ count: 5 })

韦康修,顾辰,周琦,庄俊辰,陈乔

## getName({ count: 5, unique: true, givenNameDuplicated: true })

蔡焕焕,杨汶汶,汪姬姬,马鱼鱼,谭铄铄

## getName({ count: 5, surname: "张" })

张熙,张维怡,张珂涛,张林曦,张勇柯

## getName({ count: 5, surname: "张", givenNameLength: 2 })

张富松,张芊歆,张良祺,张然琳,张泉莉

## getName({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊奕,李俊霜,李俊思,李俊斌,李俊伦

## getName({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张克英,张榆英,张劲英,张岚英,张瑶英

## getName({ count: 5, unique: true, returnType: "surname" })

于,王,任,高,韩

## getName({ count: 5, unique: true, returnType: "givenName" })

艳,雀,基,蝶霞,依

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "all", givenNameLength: 1 })

师曼,卓殷,芦昕,储洁,侯翼

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "all", givenNameLength: 1 })

诸葛彦,司寇秋,太叔珂,皇甫炜,司徒琳

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "common", givenNameLength: 1 })

彭涛,殷依,康雀,郭腾,许均

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "common", givenNameLength: 1 })

司马宁,诸葛君,皇甫勋,皇甫秋,令狐柯

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "rare", givenNameLength: 1 })

礼茜,查涛,仉昱,郦焱,庚焕

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "rare", givenNameLength: 1 })

轩辕华,司寇翰,仲孙峥,闻人逸,谷梁纶

## getName({ count: 5, unique: true, surname: ["张", "李"] })

张雪,张霄城,李霄棠,李森,张昕

## getName({ count: 5, unique: true, surname: "关" })

关亮,关蝶锋,关森,关惠,关锡

## getName({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

肖穗宁,孟小桐,付小桐,宋穗宁,叶穗宁

## getName({ count: 5, unique: true, givenName: "佳运" })

章佳运,伍佳运,孟佳运,陈佳运,任佳运

## getName({ count: 5, unique: true, givenNameAttributes: "male" })

范昆,苏熙,林博豪,许峻,宋智瑾

## getName({ count: 5, unique: true, givenNameAttributes: "female" })

叶佩梦,史瑶,赵灵,彭怡,芦惠

## getName({ count: 5, unique: true, givenNameAttributes: "metal" })

纪钧君,何萧鑫,石钦懿,陆铠钰,邹铮鑫

## getName({ count: 5, unique: true, givenNameAttributes: "wood" })

毕槿星,张松,闫栩柳,尹榆,蒋梧

## getName({ count: 5, unique: true, givenNameAttributes: "water" })

蒋淼,阎渊,唐沐,刘沐竹,马淼海

## getName({ count: 5, unique: true, givenNameAttributes: "fire" })

芦曦,龙烈,卢灿烁,谢炎焱,梁骏晴

## getName({ count: 5, unique: true, givenNameAttributes: "earth" })

杨悠坤,文峻境,朱岚利,苏城,刘峰

## getName({ count: 5, unique: true, givenNameAttributes: "animal" })

雷鹤,余鹿,何鹿永,倪彪,樊龙

## getName({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] })

田茵基,樊均,高坤,纪培,韩芊峥

## getName({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] })

杜泉,耿泽,胡滨,包波,熊沐烨

## getName({ count: 5, unique: true, gender: "female" })

洪燕诗,焦琳,田婷,冯骏蕊,邓语宏

## getName({ count: 5, unique: true, wuxing: "fire" })

黄炜焕,邓景炜,邓晖烽,郝烨,赵烨

## getName({ count: 5, unique: true, wuxing: "earth", givenNameAttributes: "water" })

蒋淼基,姚峻源,罗垚,姚垚,金峰

## getName({ count: 10, unique: true, surnamePickStrategy: "random" })

伍棠永,马康,史斌,安棠,邢怡瑶,高咏杰,令狐毅奕,徐彪,吕雀志,孙炎

## getName({ count: 10, unique: true, surnamePickStrategy: "weight" })

孙柏,钟霄海,彭珊婷,季宾雅,叶梓哲,魏德皓,侯健,苏钦,贾槿烨,熊翔

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

崔书韵

## getNameStr("彭")

彭劲

## getNameStr(5)

袁翼运,颜亮渊,杨棠宏,范婷,范德扬

## getNameStr("姚", 5)

姚曼,姚运,姚雅,姚龙,姚佑威

## getNameStr({ count: 5 })

贺铄,申屠伟运,蔡渊潇,简志,王林鹿

## getNameStr({ count: 5, unique: true, givenNameDuplicated: true })

郭泉泉,阎彪彪,潘炜炜,方舒舒,徐信信

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

秦

## getSurname(5)

高,季,田,徐,蓝

## getSurname({ count: 5, surnameType: "compound", unique: true })

令狐,司徒,长孙,夏侯,皇甫

## getGivenName()

良

## getGivenName(5)

菁,鲸,雯麟,贺浩,乐博

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

书书
