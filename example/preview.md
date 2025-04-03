# API Preview

## cnname()

肖鲸炎

## cnname("彭")

彭雯鱼

## cnname(5)

韦荣,翟翰,任怡华,郝昀,熊萱

## cnname("姚", 5)

姚泓,姚辉,姚淼绣,姚晗庆,姚锴

## cnname({ count: 5 })

王艳,郑柔秋,赵康,邹姬瑜,石珍

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

罗翊翊,白城城,郭烁烁,吴梦梦,钟岱岱

## cnname({ count: 5, surname: "张" })

张泉信,张桐,张炎思,张婉,张慧星

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张星鱼,张毅庆,张克君,张岩宾,张烁滨

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊基,李俊全,李俊航,李俊俪,李俊钧

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张博英,张梅英,张运英,张纶英,张慧英

## cnname({ count: 5, unique: true, returnType: "surname" })

白,吕,胡,马,邓

## cnname({ count: 5, unique: true, returnType: "givenName" })

莉,镇,潇亮,旭,琳静

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

撒杰,彤俪,蒲昊,萧泉,杨丽

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

尉迟霜,上官辰,壤驷彪,闾丘杰,轩辕源

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

柳冠,朱烨,黄语,康乔,黄鼎

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

曹蝉,史峥,于锋,郭茵,徐鲸

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

诸葛仪,上官枫,诸葛鹰,夏侯景,申屠栩

## cnname({ count: 5, unique: true, surname: ["张", "李"] })

李伦燕,李蝉,张珍昱,李卫,张栋海

## cnname({ count: 5, unique: true, surname: "关" })

关露雅,关悠远,关珊,关岳琳,关梧

## cnname({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

梁穗宁,程小桐,曹小桐,梁小桐,兰小桐

## cnname({ count: 5, unique: true, givenName: "佳运" })

谭佳运,黄佳运,庄佳运,蒋佳运,林佳运

## cnname({ count: 5, unique: true, givenNameAttributes: "male" })

殷宇,吕纶南,章彦朗,高庆,傅昱凯

## cnname({ count: 5, unique: true, givenNameAttributes: "female" })

唐茹峥,许妍,尹曼娜,侯芸,聂美

## cnname({ count: 5, unique: true, givenNameAttributes: "metal" })

牛钦,邢镇永,谢铮铮,姚锋铮,阮铭

## cnname({ count: 5, unique: true, givenNameAttributes: "wood" })

丁栩,胡桦,石昕枫,吴槿,金桦

## cnname({ count: 5, unique: true, givenNameAttributes: "water" })

司马洁,金泷,于雅泉,李泓,贺淼泽

## cnname({ count: 5, unique: true, givenNameAttributes: "fire" })

李烨,赵灿烨,尹柯炜,赵炜,黄晴

## cnname({ count: 5, unique: true, givenNameAttributes: "earth" })

叶佑磊,杨垚清,吕均磊,江航垚,易坤

## cnname({ count: 5, unique: true, givenNameAttributes: "animal" })

吕彪晨,申雀昱,林蝶,钟嘉鱼,樊蝶

## cnname({ count: 5, unique: true, givenNameAttributes: "all" })

陈良,侯朗,符宇宇,廖竹,沈婉昕

## cnname({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] })

彭岳,陆岩,孔均,安垚,张岩蔚

## cnname({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] })

余沐,董沐,史滨,聂涛,曾泉

## cnname({ count: 5, unique: true, gender: "female" })

卢绮俪,杨咏,秦茜,韩慧峥,陈雪

## cnname({ count: 5, unique: true, elements: "fire" })

方曦,姜曦炎,郭炜,蔡曦焱,汪灿烈

## cnname({ count: 5, unique: true, elements: "earth", givenNameAttributes: "water" })

蔡岱,郭岳淇,岳泷培,魏涛坤,郑境波

## cnname({ count: 10, unique: true, surnamePickStrategy: "random" })

冯鹤宸,覃信樱,赵松璇,姚燕,贾穗,焦岱殷,凌钰婉,邢霖,牛龙彪,宁鑫

## cnname({ count: 10, unique: true, surnamePickStrategy: "weight" })

龚栋烈,卢海,林汶栋,黄彩桐,贾琳,董瑞,罗腾,尹波芊,马涛蝶,马良

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

汤纶

## cnnamestr("彭")

彭芸

## cnnamestr(5)

马德子,侯娇凯,武岱威,郝腾,郑永

## cnnamestr("姚", 5)

姚烽,姚宇,姚芊,姚芳,姚清

## cnnamestr({ count: 5 })

毛纶,潘锡美,贾星,刘毓,焦乔

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

严骏骏,沈均均,聂依依,邵鑫鑫,潘铮铮

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

袁

## getSurname(5)

唐,周,伍,熊,李

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

欧阳,上官,司徒,申屠,慕容

## getGivenName()

宇

## getGivenName(5)

鹤波,军槿,雪惠,鹤,勋勋

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

辰辰
