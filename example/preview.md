
# API Preview

## cnname()

熊义莹

## cnname("彭")

彭妮

## cnname(5)

冯彤珊,翟烨,贾焕,何岩,殷玲翼

## cnname("姚", 5)

姚霜富,姚彤,姚鱼,姚晨,姚书

## cnname({ count: 5 })

袁超,范全,侯鲸,熊博,温悠

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

王晨晨,罗卓卓,崔然然,沈桂桂,曹磊磊

## cnname({ count: 5, surname: "张" })

张轩泉,张霏,张铠,张妍雯,张垚思

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张蝶渊,张乔纶,张星杰,张全天,张德伊

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊柯,李俊威,李俊思,李俊扬,李俊淼

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张美英,张婉英,张志英,张境英,张潇英

## cnname({ count: 5, unique: true, part: "surname" })

王,姚,程,罗,史

## cnname({ count: 5, unique: true, part: "givenName" })

彦,泉文,德,森卓,灿

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

韦志,濮坤,梅妍,守泓,占锦

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

鲜于柳,东方曦,司马绣,欧阳可,尉迟峰

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

梁秋,孙咏,薛歆,韩培,肖震

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

武辰,邓娜,王桂,洪涵,吴鑫

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

令狐岚,司马梅,皇甫展,东方震,欧阳卓

## cnname({ count: 5, unique: true, surname: ["张", "李"] })

李妮,李元,张华基,张杉,李珊

## cnname({ count: 5, unique: true, surname: [] })

怡,衡,展,梦,柔

## cnname({ count: 5, unique: true, givenNameType: "male" })

赵熙,江瑞泽,朱劲震,梁庆,贾峰

## cnname({ count: 5, unique: true, givenNameType: "female" })

董俐,郑穗,闫绮,林颖,苏凤子

## cnname({ count: 5, unique: true, givenNameType: "metal" })

汤昱锦,江铭镇,董钰铭,万锡,尹锡铠

## cnname({ count: 5, unique: true, givenNameType: "wood" })

康楠,徐桦,彭栩,刘栋槿,白柳晓

## cnname({ count: 5, unique: true, givenNameType: "water" })

傅宸海,苏泓渊,傅渊,陆淇,高海泉

## cnname({ count: 5, unique: true, givenNameType: "fire" })

谢晗,齐炎,石晴,邹旭,胡晖

## cnname({ count: 5, unique: true, givenNameType: "earth" })

文磊,卢磊林,谭境,康磊,葛境

## cnname({ count: 5, unique: true, givenNameType: "animal" })

龚雀,何伊燕,谢鹤安,傅鹿,曹蝉

## cnname({ count: 5, unique: true, givenNameType: "all" })

郑颖,孟灿,江全,熊咏,慕容祺

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

李婷垚,钱培,高坤琦,冯基,余峥珂

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

颜源,陶炜泉,黄沐,郭涵炫,潘涛

## cnname({ count: 5, unique: true, gender: "female" })

李少灵,焦琳,殷岑蔚,娄樱,贺彬姬

## cnname({ count: 5, unique: true, elements: "fire" })

蒋烨,曹旭烁,文烽,赵晴善,安曦炫

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

鲁涛城,曹海岱,樊坤,王峻,韩源岱

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

闫波佩

## cnnamestr("彭")

彭晗

## cnnamestr(5)

钱晓绣,闫韬军,石尧,罗茹,侯澜琦

## cnnamestr("姚", 5)

姚腾凯,姚峻雪,姚芷,姚志莹,姚晗

## cnnamestr({ count: 5 })

郭森炜,闫铮,黄姬诚,卢钦奇,肖妙

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

徐麟麟,刘槿槿,于义义,陈卫卫,马全全

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

尤

## getSurname(5)

罗,季,闫,章,颜

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

欧阳,诸葛,尉迟,司徒,夏侯

## getGivenName()

美晴

## getGivenName(5)

蝉,曼,信雯,东,仪鑫

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

倩倩
