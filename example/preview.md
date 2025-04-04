# API Preview

## getName()

温朗

## getName("彭")

彭蕊语

## getName(5)

高文东,陈俪,郑皓凡,乔娇辰,聂炎雀

## getName("姚", 5)

姚诚,姚婉,姚翔,姚强,姚雨少

## getName({ count: 5 })

沈远骏,蒋瑜乐,庞柔梓,牛岑泉,郑波彤

## getName({ count: 5, unique: true, givenNameDuplicated: true })

贾子子,柳仪仪,蓝希希,龚麟麟,付绣绣

## getName({ count: 5, surname: "张" })

张奕,张永,张善媛,张桂垚,张蝉

## getName({ count: 5, surname: "张", givenNameLength: 2 })

张城殷,张良霖,张豪彩,张昀潇,张婉菁

## getName({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊书,李俊纶,李俊雨,李俊锦,李俊腾

## getName({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张旭英,张嫣英,张娇英,张麟英,张穗英

## getName({ count: 5, unique: true, returnType: "surname" })

孙,岳,董,乔,鲁

## getName({ count: 5, unique: true, returnType: "givenName" })

静萧,健鹿,瑞,维卓,鲸

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "all", givenNameLength: 1 })

明梦,休语,时泷,史菁,廉茵

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "all", givenNameLength: 1 })

宗政汶,诸葛樱,段干亦,单于少,宗政诚

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "common", givenNameLength: 1 })

田翼,魏娇,郑诗,孙震,叶利

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "common", givenNameLength: 1 })

令狐妍,申屠栋,诸葛伦,欧阳劲,诸葛野

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "rare", givenNameLength: 1 })

通桂,闳奕,景泓,车朗,锐震

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "rare", givenNameLength: 1 })

闻人昱,公羊泷,钟离竹,公冶珂,东门娜

## getName({ count: 5, unique: true, surname: ["张", "李"] })

张欣,李森,张珂良,李豪,张莉垚

## getName({ count: 5, unique: true, surname: "关" })

关庆歆,关垚铠,关惠俐,关鹿,关竹桂

## getName({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

苏小桐,罗小桐,钱穗宁,武小桐,徐穗宁

## getName({ count: 5, unique: true, givenName: "佳运" })

闫佳运,潘佳运,雷佳运,申佳运,宋佳运

## getName({ count: 5, unique: true, givenNameAttributes: "male" })

沈峰伟,史天,沈晨锐,庄元泽,邹震

## getName({ count: 5, unique: true, givenNameAttributes: "female" })

彭莉,赖绣姬,郭茜,汪诗,俞珍

## getName({ count: 5, unique: true, givenNameAttributes: "metal" })

马秋钦,龙铄懿,伍铭,苏钰昱,庞钰潇

## getName({ count: 5, unique: true, givenNameAttributes: "wood" })

郭梧,文楠凡,闫杉槿,秦栋栩,龚枫

## getName({ count: 5, unique: true, givenNameAttributes: "water" })

邱梓源,周涵,章洁,王海波,吴元沐

## getName({ count: 5, unique: true, givenNameAttributes: "fire" })

邹炎,汪炎,高晴,崔烈,韦灿旭

## getName({ count: 5, unique: true, givenNameAttributes: "earth" })

沈岳,侯岱佳,侯垚磊,雷岚基,邓峰

## getName({ count: 5, unique: true, givenNameAttributes: "animal" })

方鲸,蓝鹰,郝鹰依,叶蝶,汪鹰

## getName({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] })

黄城佩,王岩,郭岳,周岱,高梦培

## getName({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] })

黎涛炎,徐泷,徐海,冯涛,尚炜源

## getName({ count: 5, unique: true, gender: "female" })

邓萍,吕丽,伍珊,许晴,黎仪敏

## getName({ count: 5, unique: true, wuxing: "fire" })

杨烈,梁逸烽,董晴焕,韦烽烈,包晴

## getName({ count: 5, unique: true, wuxing: "earth", givenNameAttributes: "water" })

黄渊岳,丁岚,莫磊波,王岚,吴城

## getName({ count: 10, unique: true, surnamePickStrategy: "random" })

牛鹤煜,邵镇豪,郭岳辉,谭可,涂澜,邱翔,唐翊,张鲸辉,叶阳,易蕊

## getName({ count: 10, unique: true, surnamePickStrategy: "weight" })

何烁凌,赖元俊,闫星珍,史凤垚,樊凡,许弘,史骏铮,殷岱烁,林昀,于宁

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

莫祺

## getNameStr("彭")

彭雪宸

## getNameStr(5)

龙书希,倪瑜,万懿,吴信澜,梁景

## getNameStr("姚", 5)

姚岑垚,姚艳鹤,姚亮安,姚晓,姚昀

## getNameStr({ count: 5 })

熊萱,贺栋,付晨君,曾君,蒋彦杉

## getNameStr({ count: 5, unique: true, givenNameDuplicated: true })

曹弘弘,闫佳佳,钱钰钰,尚茹茹,金祥祥

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

钟

## getSurname(5)

崔,陈,牛,张,彭

## getGivenName()

威

## getGivenName(5)

炜殷,凡岩,语,雨,培
