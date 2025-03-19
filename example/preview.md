
# API Preview

## cnname()

曹炎

## cnname("彭")

彭岩

## cnname(5)

薛玲凌,冯昆,余凌逸,江昭,秦利锋

## cnname("姚", 5)

姚杉,姚峰,姚鹰,姚殷,姚晓

## cnname({ count: 5 })

刘栩芮,姚鹤哲,郭昱佑,叶栋南,毛晴钰

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

钱辉辉,黄杉杉,钟棠棠,魏秋秋,魏珍珍

## cnname({ count: 5, surname: "张" })

张宏,张艳鹤,张静柔,张岑,张蕊杉

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张城晴,张蕊全,张艳锡,张蝶岩,张烨诚

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊瑜,李俊秋,李俊宏,李俊源,李俊毓

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张燕英,张泓英,张槿英,张英英,张悠英

## cnname({ count: 5, unique: true, part: "surname" })

赖,石,孙,傅,徐

## cnname({ count: 5, unique: true, part: "givenName" })

轩宇,境天,妍,宸,奇

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

蒋泉,朴城,融垚,沙殷,昔铠

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

欧阳运,步都霞,司空清,司空卓,谷梁安

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

余乐,韩轩,朱璇,郑文,袁馨

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

戴秋,张希,肖昱,朱敏,余基

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

欧阳衡,尉迟妙,诸葛芳,慕容俪,司空歆

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张焕松,张乔,李岩,张雪,张昊栋

## cnname({ count: 5, unique: true, givenNameType: "male" })

贾锋安,徐庆昊,莫祥凯,汪劲,傅豪

## cnname({ count: 5, unique: true, givenNameType: "female" })

尹怡,王佩颖,谢亦萍,麦姬梦,朱雨美

## cnname({ count: 5, unique: true, givenNameType: "metal" })

宋锋,吴铠,苏祺铄,黄锴,周钦

## cnname({ count: 5, unique: true, givenNameType: "wood" })

崔楠,郑榆,肖森,贺昱桂,杨柏

## cnname({ count: 5, unique: true, givenNameType: "water" })

郭泓,李仪泓,吴淇,欧阳竹淼,彭源渊

## cnname({ count: 5, unique: true, givenNameType: "fire" })

贾烈烈,孙骏灿,罗炎晗,马晖煜,傅炫

## cnname({ count: 5, unique: true, givenNameType: "earth" })

赵城希,徐宏城,方岳,李基,郑峻

## cnname({ count: 5, unique: true, givenNameType: "animal" })

杨凤昱,吴雀,杨鹰少,郭蝶,邓皓兔

## cnname({ count: 5, unique: true, givenNameType: "all" })

洪煜,何依骏,韩晓,任轩,姜云亮

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

熊城绮,毛岳菁,薛霏培,段璇峻,黄峻珍

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

龙沐,伍焕海,莫淇,熊淼炜,姜炜涛

## cnname({ count: 5, unique: true, gender: "female" })

涂凤韵,崔歆,姚芮,郭芸,薛茵嫣

## cnname({ count: 5, unique: true, elements: "fire" })

林烁,叶晖晴,肖晓炜,冯灿奇,白炫晖

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

康培,宋岱洁,易滨岱,叶垚,戴峥涛

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

赵彩芳

## cnnamestr("彭")

彭仪

## cnnamestr(5)

朱霜逸,石勇,薛云,孟烽悠,闫柔

## cnnamestr("姚", 5)

姚鹿焕,姚凡,姚辉,姚展,姚毓

## cnnamestr({ count: 5 })

严语,唐祺,叶烁泓,钟歆梓,顾萧磊

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

武义义,文智智,贾锋锋,蔡宁宁,白熙熙

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

肖

## getSurname(5)

轩辕,程,马,程,闫

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

欧阳,尉迟,夏侯,东方,令狐

## getGivenName()

悠

## getGivenName(5)

南,俐鹿,凯,泉珂,曼

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

超超,芷芷,昱昱,子子,琳琳
