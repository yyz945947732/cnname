
# API Preview

## cnname()

胡婷樱

## cnname("彭")

彭宸烨

## cnname(5)

易桂珍,廖镇彦,周宁,孔露婷,武雯蔚

## cnname("姚", 5)

姚淇,姚惠景,姚楠,姚峰,姚洁

## cnname({ count: 5 })

郭扬俊,夏鼎,邹天光,陈亮,杨震昊

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

董桂桂,曹敏敏,马懿懿,邱玲玲,吕珊珊

## cnname({ count: 5, surname: "张" })

张倩景,张梦,张韵钰,张欣,张伊

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张镇伊,张灿克,张豪军,张彩昊,张镇芷

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊凌,李俊贺,李俊健,李俊桦,李俊芷

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张腾英,张滨英,张妍英,张勇英,张蔚英

## cnname({ count: 5, unique: true, part: "surname" })

夏,王,陈,任,卢

## cnname({ count: 5, unique: true, part: "givenName" })

清,峰博,栋,诗,奇

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

党南,刁卫,钮安,蔡瑶,秦腾

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

闻人勇,公孙雯,东方运,皇甫炫,单于军

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

杨妮,杜文,王逸,石悠,罗婷

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

赵燕,徐栩,安萧,傅槿,刘南

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

上官彩,公孙琦,公孙棠,司空潇,澹台锋

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张杰,张桐荣,张汶曦,李荣淼,张淇

## cnname({ count: 5, unique: true, givenNameType: "male" })

廖韬,汪炎,龚旭,范志,葛佑

## cnname({ count: 5, unique: true, givenNameType: "female" })

贾云芸,谢蔚,钟英语,田穗逸,赵澜霜

## cnname({ count: 5, unique: true, givenNameType: "metal" })

黄锋,刘钰鑫,陆铄,常义钰,叶铮钦

## cnname({ count: 5, unique: true, givenNameType: "wood" })

郭柳,邹桂,孔桐楠,涂桦,邱柏桂

## cnname({ count: 5, unique: true, givenNameType: "water" })

康沐琪,魏淇,陈滨源,梁涛,傅洁

## cnname({ count: 5, unique: true, givenNameType: "fire" })

董炎乐,翟炎,廖晗,许曦琪,余晗焱

## cnname({ count: 5, unique: true, givenNameType: "earth" })

汪基磊,余岱,朱培,杨境,尤岳峥

## cnname({ count: 5, unique: true, givenNameType: "all" })

吴良,沈伟云,罗思韬,莫毓,姚铠

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

郑惠峻,吴城芷,宋基,曾坤,谢柔岚

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

熊涵,贺淼,董沐,彭海晴,邓旭涵

## cnname({ count: 5, unique: true, gender: "female" })

唐彩沐,石歆,张依亦,潘珂,文婷奇

## cnname({ count: 5, unique: true, elements: "fire" })

钟烽,殷焕,邵旭,胡泽炫,肖焱炫

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

姜基,张渊峰,魏峥,邹峰,张城

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

冯安烁

## cnnamestr("彭")

彭辰诗

## cnnamestr(5)

苏娜菁,汪岑文,杨芸垚,郭博晗,肖淇钧

## cnnamestr("姚", 5)

姚芊,姚鑫,姚纶,姚昭泓,姚欣

## cnnamestr({ count: 5 })

段亮嫣,董梅,易旭,郑樱淼,毛雨岑

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

温晗晗,孙柳柳,薛光光,万涛涛,金勇勇

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

吴

## getSurname(5)

程,龚,秦,孟,洪

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

欧阳,司马,慕容,公孙,司空

## getGivenName()

萍

## getGivenName(5)

美远,翰全,威,彦,茵

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

彦彦,林林,然然,承承,霞霞
