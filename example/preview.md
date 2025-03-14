
# API Preview

## cnname()

乔瑜超

## cnname("彭")

彭浩

## cnname(5)

马枫,戴凌璋,王俊勋,徐怡,胡东

## cnname("姚", 5)

姚烈怡,姚航,姚鼎毓,姚甜,姚鼎

## cnname({ count: 5 })

贺涛,施祥,戴皓艳,郑佑霖,易昱

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

潘锻锻,黄勋勋,费舒舒,陈柯柯,萧珂珂

## cnname({ count: 5, surname: "张" })

张润波,张梦野,张承,张睿,张昕

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张霖伦,张心玲,张昊培,张涟俪,张航漪

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊睿,李俊文,李俊垚,李俊波,李俊岑

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张可英,张峰英,张烽英,张德英,张骏英

## cnname({ count: 5, unique: true, part: "surname" })

胡,雷,牛,任,谢

## cnname({ count: 5, unique: true, part: "givenName" })

铭,善瑞,伊,韬,梓

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

弘歆,龙绣,睦殷,牛锐,闵安

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

宇文萱,公孙伊,锺离笑,司徒威,东郭航

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

王锴,俞岚,朱利,胡德,司语

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

萧霞,胡栋,胡劲,董德,周炎

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

欧阳艳,公孙辰,司徒泓,尉迟桦,司空懿

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张柳星,李瑞,张杉慧,张峻,张殷

## cnname({ count: 5, unique: true, givenNameType: "male" })

陆奕健,姜亦野,薛东,应鑫元,万鼎

## cnname({ count: 5, unique: true, givenNameType: "female" })

屈珍嫣,戴杰珂,吴宇瑶,薛穗,唐雪

## cnname({ count: 5, unique: true, givenNameType: "metal" })

关锡锋,萧锐,吴锐,柏锡,贾钧

## cnname({ count: 5, unique: true, givenNameType: "wood" })

姜桦,瞿柯枫,蓝梁,徐枫,龙松

## cnname({ count: 5, unique: true, givenNameType: "water" })

段涟涟,牛湛涵,蒋泉,曾涛,许悠泽

## cnname({ count: 5, unique: true, givenNameType: "fire" })

朱晗,易炎,周烈,顾炀,于旭

## cnname({ count: 5, unique: true, givenNameType: "earth" })

翁峰,程城,程骏境,侯垒,徐城

## cnname({ count: 5, unique: true, givenNameType: "all" })

谭明美,关桂毓,郭书,许冠,曾俊仪

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

钟哲钜

## cnnamestr("彭")

彭悠锐

## cnnamestr(5)

关岩坡,郭毓文,赵歆,贺韬峥,胡弘

## cnnamestr("姚", 5)

姚枫,姚烽景,姚鼎,姚炫,姚涛少

## cnnamestr({ count: 5 })

卢伦涵,曾殷荣,聂昀,崔乔竹,邱婉

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

罗诗诗,姜霜霜,钱佳佳,贾威威,郝奇奇

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
