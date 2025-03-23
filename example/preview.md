
# API Preview

## cnname()

刘航

## cnname("彭")

彭璇鱼

## cnname(5)

曹鹤,俞渊,张雯,范云书,胡煜萱

## cnname("姚", 5)

姚楠,姚超,姚莉奇,姚鲸,姚霞

## cnname({ count: 5 })

方柳乔,魏诚,高珊,郭希槿,邵少

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

卢卓卓,彭晨晨,叶栩栩,叶富富,夏澜澜

## cnname({ count: 5, surname: "张" })

张源锦,张志,张基,张毓,张龙

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张桦安,张依均,张辉柏,张艳炎,张乐熙

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊洁,李俊涛,李俊坤,李俊荣,李俊林

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张珂英,张姬英,张智英,张灵英,张姬英

## cnname({ count: 5, unique: true, part: "surname" })

吴,孟,毛,范,刘

## cnname({ count: 5, unique: true, part: "givenName" })

昕,强,美鹿,露梧,磊

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

马亦,融天,邰子,贲晓,齐强

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

东方昭,司徒卫,令狐琦,宰父蝉,宗政雯

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

钟城,林铮,马星,魏璇,毕彪

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

马佩,孟萱,钟澜,杜凤,孔峻

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

公孙朗,司空蝉,上官姬,尉迟煜,皇甫宁

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张佩,李垚,李诗峰,张源铮,张钰

## cnname({ count: 5, unique: true, givenNameType: "male" })

毛贺,冯劲,罗华光,石昭,钟佑

## cnname({ count: 5, unique: true, givenNameType: "female" })

汤诗嘉,熊岑茹,韩诗雪,颜萍辰,龚雯

## cnname({ count: 5, unique: true, givenNameType: "metal" })

姚鑫,黄鑫,卢钟,李锴,李钦铭

## cnname({ count: 5, unique: true, givenNameType: "wood" })

汪柏信,肖楠琪,周榆,郝君槿,柳柏

## cnname({ count: 5, unique: true, givenNameType: "water" })

焦淇渊,陈泓涵,江涵涛,曾泽,林泽

## cnname({ count: 5, unique: true, givenNameType: "fire" })

肖烈殷,乔晴焱,邵灿,董炫然,孟凡曦

## cnname({ count: 5, unique: true, givenNameType: "earth" })

江培岚,任峥垚,常基懿,曹翊岳,冯岚

## cnname({ count: 5, unique: true, givenNameType: "animal" })

彭鹿,田鲸,夏鱼,蔡燕,黄雀

## cnname({ count: 5, unique: true, givenNameType: "all" })

邱曼基,赵贺,陶柏,何亮,田岳

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

闫曼岚,梁岳,梁岚,胡峻,翟霞均

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

白泷,易洁,蔡炜淼,侯波晗,蔡晗源

## cnname({ count: 5, unique: true, gender: "female" })

贾霏扬,廖咏林,蒋俪,郑美,王思潇

## cnname({ count: 5, unique: true, elements: "fire" })

何焕,闫炫炫,周炜,黎炜乔,钱炜焱

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

张境,徐洁峰,蔡岚,董均泉,苏培

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

石梓

## cnnamestr("彭")

彭清睿

## cnnamestr(5)

贺宾亦,徐荣卫,邵祺,黎莉珂,朱辰露

## cnnamestr("姚", 5)

姚欣绣,姚亮,姚梧,姚梅,姚锦宏

## cnnamestr({ count: 5 })

彭佩萱,常滨蝉,黄铠灵,傅晖浩,张栩美

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

常扬扬,陆栋栋,冯心心,白淇淇,戴源源

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

贾

## getSurname(5)

石,宋,唐,夏,蔡

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

司徒,欧阳,皇甫,上官,东方

## getGivenName()

凡

## getGivenName(5)

桐阳,奇野,皓,俐,柳

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

纶纶,滨滨,娇娇,鼎鼎,芸芸
