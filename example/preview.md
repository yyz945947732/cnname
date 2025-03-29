
# API Preview

## cnname()

易华

## cnname("彭")

彭智璇

## cnname(5)

袁俪,范毓茜,方瑶,王娜灵,沈雀娇

## cnname("姚", 5)

姚清,姚伟,姚乔岑,姚乔,姚惠雅

## cnname({ count: 5 })

文涛,谭桦,韩淼天,聂威,许烈鱼

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

高佩佩,方馨馨,彭梧梧,邱子子,尹逸逸

## cnname({ count: 5, surname: "张" })

张乐英,张思玲,张怡涵,张森,张文伊

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张庆永,张悠宏,张殷梦,张鲸焱,张韵展

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊仪,李俊渊,李俊晨,李俊歆,李俊瑜

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张芷英,张毓英,张瑾英,张琦英,张善英

## cnname({ count: 5, unique: true, part: "surname" })

吴,贾,余,肖,陆

## cnname({ count: 5, unique: true, part: "givenName" })

栋,朗玲,嫣,强,森鸿

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

岳元,步瑞,姒珍,朋佑,姬锴

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

拓跋境,夏侯勋,壤驷婷,司空志,宗政鸿

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

林茹,乔劲,伍峻,肖睿,胡槿

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

王萍,闫璇,谭雀,宋雪,谢竹

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

司徒煜,公孙妍,令狐樱,司空瑶,令狐心

## cnname({ count: 5, unique: true, surname: ["张", "李"] })

张懿梦,李佳全,张垚维,张森绮,张境航

## cnname({ count: 5, unique: true, surname: "关" })

关可槿,关昱琪,关茜智,关烁,关毅麟

## cnname({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

唐小桐,郭穗宁,郝小桐,郑小桐,王小桐

## cnname({ count: 5, unique: true, givenName: "佳运" })

胡佳运,谭佳运,葛佳运,江佳运,贾佳运

## cnname({ count: 5, unique: true, givenNameType: "male" })

邱康昭,许翼峰,马冠,胡翔,赖卫

## cnname({ count: 5, unique: true, givenNameType: "female" })

刘诚洁,江茵,朱美璇,段韵洁,郑洁

## cnname({ count: 5, unique: true, givenNameType: "metal" })

金镇,梁钰,范钟,殷铠,常镇

## cnname({ count: 5, unique: true, givenNameType: "wood" })

孔枫彬,丁栋,许柏,赵栋,邵宏柳

## cnname({ count: 5, unique: true, givenNameType: "water" })

杨涵运,常洁海,伍淇,钱渊,贾泷

## cnname({ count: 5, unique: true, givenNameType: "fire" })

杨煜晴,许灿,汪烈,刘利炎,杨曦

## cnname({ count: 5, unique: true, givenNameType: "earth" })

卢峰岳,汤磊,杨峰,温泽培,任垚

## cnname({ count: 5, unique: true, givenNameType: "animal" })

林梓龙,胡龙岚,韦清龙,张麟,龙蝶亦

## cnname({ count: 5, unique: true, givenNameType: "all" })

贺穗鑫,吴铄,潘霏,田维,史昱逸

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

段磊雪,张城,程峥,袁茵岩,朱境

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

乔淼,于炜洁,肖泉,文泷,苏涛

## cnname({ count: 5, unique: true, gender: "female" })

唐珍,莫洁,王霜伊,姚茜,蔡彤凡

## cnname({ count: 5, unique: true, elements: "fire" })

毕全焕,文焕,于梓煜,石晗,乔烈衡

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

宋岱,吴培淼,范峥洁,宋境,冯涵峰

## cnname({ count: 10, unique: true, surnameAlgorithm: "random" })

苏城,葛雪,谭凌,周炫,施璇,唐良诚,程富,武萍语,金伊,尉迟辉

## cnname({ count: 10, unique: true, surnameAlgorithm: "weight" })

王鹰烈,马婷梓,黄昊,魏昊,章汶莉,曹旭,丁波,宋芸,田娜冠,许劲

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

吴奇敏

## cnnamestr("彭")

彭芊娜

## cnnamestr(5)

武岩,马子,唐柳蝉,袁森志,叶洁

## cnnamestr("姚", 5)

姚志,姚嫣茜,姚翔,姚斌柯,姚樱鹿

## cnnamestr({ count: 5 })

韩萍祺,白秋,刘佑,魏韵,刘蕊英

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

谭宏宏,史铄铄,冯馨馨,樊汶汶,周利利

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

龙

## getSurname(5)

江,王,张,公孙,戴

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

司马,令狐,尉迟,诸葛,皇甫

## getGivenName()

钰语

## getGivenName(5)

翔辰,心,华,茜,阳

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

霜霜
