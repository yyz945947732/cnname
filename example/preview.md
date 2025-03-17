
# API Preview

## cnname()

甘涵

## cnname("彭")

彭东

## cnname(5)

章莹宁,姚晗霜,吴承修,司瑜昊,俞歆睿

## cnname("姚", 5)

姚殷,姚培宇,姚枫贺,姚娜,姚晨

## cnname({ count: 5 })

许岩,魏湛,钟娇,毛鑫昕,李嘉佑

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

秦星星,乔俐俐,董炀炀,罗杰杰,崔鑫鑫

## cnname({ count: 5, surname: "张" })

张莹,张柯梦,张嫣,张森,张燕桦

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张仪峻,张朗钜,张毅梧,张锡勇,张龙骏

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊荣,李俊浩,李俊梅,李俊烽,李俊瑜

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张松英,张子英,张坤英,张龙英,张鸿英

## cnname({ count: 5, unique: true, part: "surname" })

田,徐,翟,史,单

## cnname({ count: 5, unique: true, part: "givenName" })

东腾,琦心,宇卓,林,睿博

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

徭文,禄琪,符萍,彭镇,庾浩

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

宗政涵,仲孙琳,公孙芳,第五智,南宫萍

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

萧逸,许潇,吴伊,樊乐,沈基

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

黎楠,申静,康珂,梁可,史美

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

太叔佳,司徒柳,长孙湛,尉迟晨,司徒琳

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张仪,张彬,张晗,李德俐,李昆

## cnname({ count: 5, unique: true, givenNameType: "male" })

秦毅,谢翔,石逸健,詹熙,张鸿

## cnname({ count: 5, unique: true, givenNameType: "female" })

蔡玲修,赵穗,毛佩心,叶静宸,廉瑶

## cnname({ count: 5, unique: true, givenNameType: "metal" })

孔锻鑫,常钰镇,钱锴,江镇,廖镇

## cnname({ count: 5, unique: true, givenNameType: "wood" })

孔槿宇,苏榆,尹松涵,樊樱,柯榆乔

## cnname({ count: 5, unique: true, givenNameType: "water" })

唐湛,陈泓泉,屈润,曹淼泉,林润

## cnname({ count: 5, unique: true, givenNameType: "fire" })

熊桦炯,许炯炀,樊烈焰,沈旭焕,孙炫焰

## cnname({ count: 5, unique: true, givenNameType: "earth" })

童峰,傅垚,孙旭坤,尹峰,廖坤希

## cnname({ count: 5, unique: true, givenNameType: "all" })

孔安,薛钜泉,岑雯杰,何义,甘岑

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

崔彩均,杨均娇,张垒,万垚,蒋甜城

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

聂涵焱,彭泉,董泽,苏泽灿,黄淼

## cnname({ count: 5, unique: true, gender: "female" })

孙珍,罗穗,杜绮修,刘露,金露

## cnname({ count: 5, unique: true, elements: "fire" })

黄煜,郑晖炜,司焰凡,赵焱,司炫清

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

彭坤波,杨培,蒋泽培,汪坤深,吴坡

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,俞,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,施,屈,祝,聂,司,伍,柯,樊,章,童,费,卫,倪,严,宿,翁,甄,申,应,车,巢,关,蒲,符,柏,佟,蒙,牛,佘,瞿,甘,莫,房,裴,翟,詹,明,成,廉,岑,阮,麦,涂,蓝,雷,丘,闻,庞,党,左,上官,欧阳,司马,夏侯,诸葛,东方,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common").length

170

## getAllSurname("common-compound")

上官,欧阳,司马,夏侯,诸葛,东方,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common-compound").length

18

## getAllSurname("common-single")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,俞,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,施,屈,祝,聂,司,伍,柯,樊,章,童,费,卫,倪,严,宿,翁,甄,申,应,车,巢,关,蒲,符,柏,佟,蒙,牛,佘,瞿,甘,莫,房,裴,翟,詹,明,成,廉,岑,阮,麦,涂,蓝,雷,丘,闻,庞,党,左

## getAllSurname("common-single").length

152

## cnnamestr()

史亦

## cnnamestr("彭")

彭泓

## cnnamestr(5)

黄韵,江熙,范贺,赵锐,谢慧

## cnnamestr("姚", 5)

姚鑫,姚昕,姚尧,姚炀,姚晴

## cnnamestr({ count: 5 })

聂琦淼,黄宸毅,魏峥,樊璋松,孟衡

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

林林林,汪依依,武昕昕,冯岳岳,高远远

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

韩

## getSurname(5)

谢,程,魏,佟,沈

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

欧阳,令狐,司马,司空,诸葛

## getGivenName()

鑫

## getGivenName(5)

奇,艳全,华森,亦,雯

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

颖颖,依依,可可,宏宏,琪琪
