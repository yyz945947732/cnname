
# API Preview

## cnname()

杨炜锐

## cnname("彭")

彭欣嫣

## cnname(5)

宋祥,白森,翁樱,蓝祥,谭震

## cnname("姚", 5)

姚翔衡,姚烁乔,姚萧,姚烽梧,姚枫炀

## cnname({ count: 5 })

叶绣,范镇智,夏亦,伍境,易俊

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

徐炜炜,刘榆榆,樊柯柯,邱辰辰,秦昊昊

## cnname({ count: 5, surname: "张" })

张奕勋,张骏希,张俐,张琦,张嫣垒

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张璋翰,张灿绣,张艳展,张芳旭,张瑶书

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊焰,李俊德,李俊岳,李俊弘,李俊涵

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张龙英,张铠英,张鸿英,张涛英,张绮英

## cnname({ count: 5, unique: true, part: "surname" })

陆,秦,汪,薛,谭

## cnname({ count: 5, unique: true, part: "givenName" })

震,瑜,颖景,智书,淼棠

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

隆霞,蒯俊,佴烽,车琳,雷栋

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

呼延强,漆雕岱,夏侯劲,尉迟奇,钟离柯

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

乔野,易庆,龙维,戴莹,夏逸

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

田天,高运,马深,谭锻,韩伊

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

夏侯霞,司空书,东方衡,东方威,司马焕

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张伦悠,李炎,张尧,张翰,张柏

## cnname({ count: 5, unique: true, givenNameType: "male" })

陈锋君,宿强,唐伦彬,程朗峻,汤冠骏

## cnname({ count: 5, unique: true, givenNameType: "female" })

高馨,郭雯,唐琦,姜静,赵瑜欣

## cnname({ count: 5, unique: true, givenNameType: "all" })

黎珍炯,袁莹,林潇,岑穗,常全

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

甘健富

## cnnamestr("彭")

彭丽槿

## cnnamestr(5)

程林,应钧,屈卓艳,傅悠,龙晖岚

## cnnamestr("姚", 5)

姚义竹,姚歆强,姚凌,姚垚,姚子

## cnnamestr({ count: 5 })

秦欣,丁炎,方卫炫,蓝焕,毛诚博

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

高东东,万强强,许森森,韩少少,卢玲玲

## parseName("张三")

{"surname":"张","givenName":"三"}

## parseName("笑三")

{"surname":"","givenName":"笑三"}

## parseName("三")

{"surname":"","givenName":"三"}

## parseName("")

{"surname":"","givenName":""}

## parseName("欧阳三")

{"surname":"欧阳","givenName":"三"}
