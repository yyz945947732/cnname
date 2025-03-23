
# API Preview

## cnname()

朱扬

## cnname("彭")

彭波穗

## cnname(5)

朱鸿龙,高逸涛,熊义晨,潘鸿淼,林珂

## cnname("姚", 5)

姚泉,姚栩,姚昕,姚桦,姚倩坤

## cnname({ count: 5 })

董博烈,韩鼎桐,叶良,董锡,谢康

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

林衡衡,马娜娜,宋皓皓,齐蔚蔚,闫祺祺

## cnname({ count: 5, surname: "张" })

张美娇,张霖,张祺,张惠贺,张雨桂

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张杰卫,张昭翼,张翔泽,张衡莹,张信焱

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊翰,李俊泓,李俊丽,李俊军,李俊勇

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张曼英,张博英,张岚英,张玲英,张宇英

## cnname({ count: 5, unique: true, part: "surname" })

焦,林,鲁,石,钟

## cnname({ count: 5, unique: true, part: "givenName" })

梧毓,樱,潇,腾,焕

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

汤鱼,劳坤,林衡,范清,应锴

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

轩辕峰,鲜于弘,相查岩,司马华,皇甫梧

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

潘凡,罗超,贾震,卢荣,郑君

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

郝少,张旭,李晴,曾宇,邓勋

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

尉迟卫,公孙梧,司马仪,公孙妍,东方竹

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

李玲芊,张泉,张焕霞,张烨,李枫

## cnname({ count: 5, unique: true, givenNameType: "male" })

孙纶阳,徐霄勋,闫野,邵承,叶劲

## cnname({ count: 5, unique: true, givenNameType: "female" })

吴雨,崔茹,文梦颖,林萱,周璇

## cnname({ count: 5, unique: true, givenNameType: "metal" })

丁锴,范铄锦,宋镇,金锋,曾永锡

## cnname({ count: 5, unique: true, givenNameType: "wood" })

林枫楠,谭枫梧,曹桦澜,于桦杉,宋桂

## cnname({ count: 5, unique: true, givenNameType: "water" })

罗涵,邵波,廖渊,吴洁泽,颜峥源

## cnname({ count: 5, unique: true, givenNameType: "fire" })

梁峥烨,潘晖伊,文旭昕,安灿,许灿铭

## cnname({ count: 5, unique: true, givenNameType: "earth" })

肖峰,胡垚,田岳基,龚磊奇,朱岱岩

## cnname({ count: 5, unique: true, givenNameType: "animal" })

常凤,郭雀,陈瑾鱼,毛鱼,许晓龙

## cnname({ count: 5, unique: true, givenNameType: "all" })

安劲,魏仪歆,刘斌镇,邹萧妮,侯毅

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

董培,郭岚霞,殷岩,肖均,殷沐峻

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

谭洁,郑淼晴,贾渊,温炜泽,孙波

## cnname({ count: 5, unique: true, gender: "female" })

江娜,杜可,杜俐,石妙依,袁茵

## cnname({ count: 5, unique: true, elements: "fire" })

严烁,于焱,白炜曦,娄晖,葛烁

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

侯洁岚,董岳滨,赵泉培,陆岩,李城源

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

冯贺

## cnnamestr("彭")

彭皓

## cnnamestr(5)

张翊蝉,孙善凯,唐俊凡,胡骏惠,廖景

## cnnamestr("姚", 5)

姚安依,姚婷,姚基星,姚善,姚熙婉

## cnnamestr({ count: 5 })

麦岑克,宋宏,姚瑶,沈麟勇,罗雯彬

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

徐曦曦,邹全全,焦凤凤,范榆榆,沈汶汶

## parseName("张三")

{"surname":"张","givenName":"三","fullName":"张三","givenNameLength":1,"isCompoundSurname":false,"isSingleCharacterSurname":true,"isGivenNameDuplicated":false}

## parseName("笑三")

{"surname":"","givenName":"笑三","fullName":"笑三","givenNameLength":2,"isCompoundSurname":false,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false}

## parseName("三")

{"surname":"","givenName":"三","fullName":"三","givenNameLength":1,"isCompoundSurname":false,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false}

## parseName("")

{"surname":"","givenName":"","fullName":"","givenNameLength":0,"isCompoundSurname":false,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false}

## parseName("欧阳三")

{"surname":"欧阳","givenName":"三","fullName":"欧阳三","givenNameLength":1,"isCompoundSurname":true,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false}

## parseName("欧阳娜娜")

{"surname":"欧阳","givenName":"娜娜","fullName":"欧阳娜娜","givenNameLength":2,"isCompoundSurname":true,"isSingleCharacterSurname":false,"isGivenNameDuplicated":true}

## getSurname()

石

## getSurname(5)

吴,傅,司徒,汤,许

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

皇甫,司徒,欧阳,司马,诸葛

## getGivenName()

梧

## getGivenName(5)

卓,悠,梅,诚,穗晓

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

智智,雅雅,瑾瑾,可可,怡怡
