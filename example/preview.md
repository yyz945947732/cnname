
# API Preview

## cnname()

程榆

## cnname("彭")

彭瑶

## cnname(5)

谭柳栋,江佩镇,周佩丽,韩炜,唐镇

## cnname("姚", 5)

姚灿源,姚浩睿,姚鼎语,姚枫,姚倩萱

## cnname({ count: 5 })

于泉,汤淇,庞冠,姜均,东方荣烈

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

赵茹茹,张岱岱,闫霏霏,秦莹莹,莫曼曼

## cnname({ count: 5, surname: "张" })

张昕,张萱,张睿姬,张瑜,张栋

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张雨宏,张珊腾,张芳劲,张元菁,张培烈

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊颖,李俊毓,李俊妮,李俊锋,李俊泉

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张庆英,张健英,张信英,张皓英,张辰英

## cnname({ count: 5, unique: true, part: "surname" })

张,邹,唐,曾,王

## cnname({ count: 5, unique: true, part: "givenName" })

栩,贺,威槿,昀俊,煜

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

军宇,刁诗,简露,韶滨,定铄

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

欧阳轩,欧阳华,宗政樱,轩辕明,亓官馨

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

杨霄,乔樱,刘林,周明,吴芮

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

梁逸,杜汶,安蕊,马晓,邓烁

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

尉迟佩,轩辕婷,公孙渊,诸葛翊,司马希

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

李亮美,张晖,李依,李信,李颖

## cnname({ count: 5, unique: true, givenNameType: "male" })

马承,易伊峰,董军逸,毛弘,毛锋嘉

## cnname({ count: 5, unique: true, givenNameType: "female" })

任可芷,黎皓咏,侯娜,冯子心,方珊

## cnname({ count: 5, unique: true, givenNameType: "metal" })

曾钰信,崔锡,马锦,汪钦铄,白铠钧

## cnname({ count: 5, unique: true, givenNameType: "wood" })

高殷桐,林榆诚,郭柳棠,石桐,黄榆

## cnname({ count: 5, unique: true, givenNameType: "water" })

毕泷,赵信海,金洁海,谢涵,韩滨

## cnname({ count: 5, unique: true, givenNameType: "fire" })

江旭,谢燚,邵逸晖,杨霖炎,谢烽烁

## cnname({ count: 5, unique: true, givenNameType: "earth" })

蔡远岱,文岩,娄城岩,傅坤永,莫涵境

## cnname({ count: 5, unique: true, givenNameType: "all" })

陆槿瑾,汪铠,薛云宇,胡锴,高锐

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

伍燕基,施萱岩,向岳,钟歆峻,肖坤

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

邓海,孟炜涵,唐滨晴,蒋涵,闫烽波

## cnname({ count: 5, unique: true, gender: "female" })

顾莉,孟珂,贺沐,戴灵,尹霜

## cnname({ count: 5, unique: true, elements: "fire" })

邵烽焱,何炫灿,任焱,石炜,赖烁

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

邵垚,吴境,毛泉城,钟岩源,孙磊

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

谭卫

## cnnamestr("彭")

彭萍

## cnnamestr(5)

程安,肖翰,陈霄玲,孟涵,季娇娜

## cnnamestr("姚", 5)

姚媛菁,姚娇,姚英,姚梅,姚安

## cnnamestr({ count: 5 })

石琦,白灵辉,史昆曼,施潇,万芮

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

刘泓泓,李懿懿,苏展展,闫康康,薛芊芊

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

袁

## getSurname(5)

郝,郝,宋,庞,江

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

司徒,上官,诸葛,令狐,夏侯

## getGivenName()

震俐

## getGivenName(5)

芮诗,星,清扬,亮,锦晗

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

璇璇,芷芷,蕊蕊,渊渊,峥峥
