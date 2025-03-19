
# API Preview

## cnname()

徐伦佑

## cnname("彭")

彭梅懿

## cnname(5)

孙博,杜鼎,于可克,韩安,林基沐

## cnname("姚", 5)

姚妙彩,姚滨潇,姚嫣,姚佳宸,姚威

## cnname({ count: 5 })

田晴,焦馨,蔡芊,王铮,郭语芸

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

朱诚诚,诸葛泉泉,潘倩倩,彭梦梦,田锐锐

## cnname({ count: 5, surname: "张" })

张志坤,张杉,张文美,张东,张枫灿

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张铮霄,张妮城,张柔翊,张柏珂,张诚梅

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊颖,李俊祥,李俊穗,李俊悠,李俊美

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张岳英,张英英,张天英,张昭英,张锴英

## cnname({ count: 5, unique: true, part: "surname" })

徐,刘,傅,马,胡

## cnname({ count: 5, unique: true, part: "givenName" })

健,桦,德义,潇宇,凌鑫

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

佼心,展荣,潮倩,绳境,段智

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

澹台桂,太叔烈,万俟昆,淳于岑,宗政源

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

彭铭,陈铠,方运,蒋琳,程晖

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

方景,薛栩,韩蔚,傅衡,孔茜

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

皇甫钧,司徒源,慕容豪,司马秋,欧阳烈

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张蕊,张彩,李雯,张富岚,张芊梧

## cnname({ count: 5, unique: true, givenNameType: "male" })

范弘祥,马亮,董鸿君,朱祥,郭展庆

## cnname({ count: 5, unique: true, givenNameType: "female" })

郝穗,毛绣,徐云琦,冯衡玲,范莹

## cnname({ count: 5, unique: true, givenNameType: "metal" })

文晓铭,何铮锴,莫鑫,吴书锴,康鑫

## cnname({ count: 5, unique: true, givenNameType: "wood" })

崔森,余梧,沈杉桐,苏桐,卢桦

## cnname({ count: 5, unique: true, givenNameType: "water" })

庞卓淼,钟海,邱海,林铭涵,肖波

## cnname({ count: 5, unique: true, givenNameType: "fire" })

钱煜焕,郭烁,郑炜晗,范晗,王曦晴

## cnname({ count: 5, unique: true, givenNameType: "earth" })

冯均,秦峥祺,曹岱岱,韩磊坤,徐希城

## cnname({ count: 5, unique: true, givenNameType: "all" })

万钟铭,夏豪,许柳,田亦,翟钦承

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

林培,曹芸坤,翟培,陶岚彤,范培

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

韩滨焱,肖烁滨,余渊,施海,罗沐

## cnname({ count: 5, unique: true, gender: "female" })

尹娇扬,黄敏,徐露艳,龚俐,万欣

## cnname({ count: 5, unique: true, elements: "fire" })

任焱,宋晗,杨燚梓,韦曦,白辰烈

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

余岱,谢岳,唐培,李泓峰,高岳

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

王,李,张,陈,刘,杨,黄,胡,赵,周,吴,徐,孙,宋,朱,马,郭,高,曹,林,梁,何,罗,郑,韩,谢,唐,董,傅,冯,许,袁,薛,姚,于,彭,肖,曾,谭,卢,苏,贾,毛,夏,余,邓,闫,戴,江,叶,丁,蔡,程,石,钟,廖,田,任,汪,范,方,潘,杜,魏,沈,万,熊,金,陆,郝,孔,白,崔,康,吕,邱,秦,蒋,姜,史,顾,侯,邵,孟,邹,段,钱,汤,黎,莫,常,尹,武,乔,贺,赖,龚,文,易,洪,庞,龙,殷,施,樊,翟,安,颜,齐,严,涂,陶,温,麦,季,俞,章,鲁,葛,伍,韦,申,尤,毕,聂,娄,焦,向,雷,柳,上官,欧阳,皇甫,司马,夏侯,诸葛,东方,尉迟,公孙,慕容,司徒,司空,令狐,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common").length

148

## getAllSurname("common-compound")

上官,欧阳,皇甫,司马,夏侯,诸葛,东方,尉迟,公孙,慕容,司徒,司空,令狐,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common-compound").length

18

## getAllSurname("common-single")

王,李,张,陈,刘,杨,黄,胡,赵,周,吴,徐,孙,宋,朱,马,郭,高,曹,林,梁,何,罗,郑,韩,谢,唐,董,傅,冯,许,袁,薛,姚,于,彭,肖,曾,谭,卢,苏,贾,毛,夏,余,邓,闫,戴,江,叶,丁,蔡,程,石,钟,廖,田,任,汪,范,方,潘,杜,魏,沈,万,熊,金,陆,郝,孔,白,崔,康,吕,邱,秦,蒋,姜,史,顾,侯,邵,孟,邹,段,钱,汤,黎,莫,常,尹,武,乔,贺,赖,龚,文,易,洪,庞,龙,殷,施,樊,翟,安,颜,齐,严,涂,陶,温,麦,季,俞,章,鲁,葛,伍,韦,申,尤,毕,聂,娄,焦,向,雷,柳

## getAllSurname("common-single").length

130

## cnnamestr()

李岳铄

## cnnamestr("彭")

彭军

## cnnamestr(5)

高祥曼,傅均梓,马桂,邵弘,高翰

## cnnamestr("姚", 5)

姚嫣,姚琪朗,姚源,姚依惠,姚良

## cnnamestr({ count: 5 })

钟舒锦,孙桐,万梓,洪伊桦,郭昊

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

姜明明,林基基,李珍珍,曹懿懿,林佳佳

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

胡

## getSurname(5)

唐,谢,陈,苏,田

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

皇甫,东方,欧阳,司马,司徒

## getGivenName()

勋

## getGivenName(5)

然秋,钧,穗,义滨,钧

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

宁宁,基基,扬扬,莉莉,晗晗
