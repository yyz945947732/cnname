
# API Preview

## cnname()

赖怡

## cnname("彭")

彭轩

## cnname(5)

刘云,薛清蔚,涂英,黄钦,陈锋

## cnname("姚", 5)

姚宁钧,姚铭沐,姚菁,姚嘉,姚朗樱

## cnname({ count: 5 })

林锦珊,王麟,郝萍,万烈钦,常嫣宾

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

张麟麟,殷翰翰,何奇奇,许蔚蔚,贺富富

## cnname({ count: 5, surname: "张" })

张婉灿,张芊佩,张可,张曦洁,张舒

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张澜泉,张翼晓,张健柏,张丽珊,张锐楠

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊衡,李俊翼,李俊澜,李俊媛,李俊少

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张渊英,张秋英,张华英,张佳英,张萧英

## cnname({ count: 5, unique: true, part: "surname" })

段,邹,朱,于,袁

## cnname({ count: 5, unique: true, part: "givenName" })

远蝶,烽康,霄,娇秋,曦

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

户晨,安昕,孔霏,邵榆,金凤

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

澹台怡,淳于霏,东方可,宗政霜,司寇柏

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

彭阳,许航,方铠,文克,邱艳

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

常璇,常蕊,苏灿,施霜,杨震

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

司徒宾,公孙晖,东方天,皇甫垚,公孙荣

## cnname({ count: 5, unique: true, surname: ["张", "李"] })

李翊,李强,张冠嘉,张霖,李城鱼

## cnname({ count: 5, unique: true, surname: "关" })

关元轩,关宁妙,关佩均,关旭诚,关昊

## cnname({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

范小桐,朱小桐,王穗宁,林穗宁,汪穗宁

## cnname({ count: 5, unique: true, givenName: "佳运" })

邵佳运,马佳运,陶佳运,姚佳运,颜佳运

## cnname({ count: 5, unique: true, givenNameType: "male" })

唐毅荣,徐纶,杜庆,戴野,樊天杰

## cnname({ count: 5, unique: true, givenNameType: "female" })

薛颖彤,殷敏,秦媛,白可,姚妍

## cnname({ count: 5, unique: true, givenNameType: "metal" })

顾铄铮,蔡钧锐,冯钟,郑钧,袁钟

## cnname({ count: 5, unique: true, givenNameType: "wood" })

蔡楠槿,伍槿,宋柏,宋松桐,周哲楠

## cnname({ count: 5, unique: true, givenNameType: "water" })

程卓涵,白旭波,潘泽泷,袁滨滨,廖淇

## cnname({ count: 5, unique: true, givenNameType: "fire" })

胡晗炜,范晴,梁烈,贾焱,闫焕佳

## cnname({ count: 5, unique: true, givenNameType: "earth" })

麦岚,高基,黎磊,石岳,龙岩城

## cnname({ count: 5, unique: true, givenNameType: "animal" })

钟鹤瑾,孔雀,彭鹿,皇甫鹤,傅鹰

## cnname({ count: 5, unique: true, givenNameType: "all" })

郭子,龚蕊,冯莉,于昆,沈超

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

苏基芮,程艳峰,孔境,曾霏坤,袁垚

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

钟沐,郭灿沐,杜泉,夏沐,闫洁炫

## cnname({ count: 5, unique: true, gender: "female" })

郑彩,田芷茜,罗然燕,梁菁璇,秦媛

## cnname({ count: 5, unique: true, elements: "fire" })

文灿,尹峥焱,朱炫,庞烨炜,麦彬灿

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

朱泓岱,周岩渊,韩涛均,万峰,龙泽均

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

丁淇仪

## cnnamestr("彭")

彭霞

## cnnamestr(5)

宋基,钟燕,陶瑶震,方昱勇,范萧野

## cnnamestr("姚", 5)

姚子可,姚岑昕,姚心,姚明,姚美

## cnnamestr({ count: 5 })

唐玲展,温琦,贺晨,徐桦,蒋君艳

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

申乔乔,孔蔚蔚,杨淼淼,韦昱昱,姚婷婷

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

章

## getSurname(5)

闫,汪,魏,白,孙

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

欧阳,皇甫,夏侯,东方,上官

## getGivenName()

仪基

## getGivenName(5)

庆,欣,柔,思,鱼晖

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

展展
