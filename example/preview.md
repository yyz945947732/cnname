
# API Preview

## cnname()

戴野

## cnname("彭")

彭锐

## cnname(5)

薛昊萧,熊岩然,乔可绮,蔡航桦,金茜庆

## cnname("姚", 5)

姚然毓,姚馨,姚文辉,姚昆,姚绮炯

## cnname({ count: 5 })

薛垒悠,何军楠,史元桦,程森,曾维烈

## cnname({ count: 5, unique: true, duplicatedGivenName: true })

胡诗诗,朱炜炜,龙诚诚,房弘弘,杜义义

## cnname({ count: 5, surname: "张" })

张萧锡,张澜,张承,张皓涛,张岳

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张天岱,张楠颖,张梓东,张妍梁,张智桂

## cnname({ count: 5, unique: true, part: "surname" })

童,汪,廖,万,施

## cnname({ count: 5, unique: true, part: "givenName" })

瑜,灿,伦,心,岳运

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

苏镇,岑悠,喻润,汤辰,牛煜

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

闻人岱,漆雕翊,段干梦,夏侯志,万俟烈

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

冯健,孔昆,毛依,高佳,陆信

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

何槿,刘璋,樊滨,高杉,牛佳

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

司徒辉,司徒梓,司空震,令狐峥,慕容茹

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

李东,张然,张亮,张尧峥,张军岩

## cnname({ count: 5, unique: true, givenNameType: "male" })

单展伟,杨超,许昊,文卫,徐光涛

## cnname({ count: 5, unique: true, givenNameType: "female" })

江语,闫穗,王茹,朱嫣颖,蒋霏霜

## cnname({ count: 5, unique: true, givenNameType: "all" })

汤龙杰,于强,陆峻,郭瑶,谭海

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,闫,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,施,屈,祝,聂,司,伍,柯,樊,章,童,费,卫,倪,严,宿,翁,甄,申,应,车,巢,关,蒲,符,柏,佟,蒙,牛,佘,瞿,甘,莫,房,裴,翟,詹,明,成,廉,岑,阮,蓝,雷,丘,闻,庞,党,上官,欧阳,司马,夏侯,诸葛,东方,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common").length

167

## getAllSurname("common-compound")

上官,欧阳,司马,夏侯,诸葛,东方,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common-compound").length

18

## getAllSurname("common-single")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,闫,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,施,屈,祝,聂,司,伍,柯,樊,章,童,费,卫,倪,严,宿,翁,甄,申,应,车,巢,关,蒲,符,柏,佟,蒙,牛,佘,瞿,甘,莫,房,裴,翟,詹,明,成,廉,岑,阮,蓝,雷,丘,闻,庞,党

## getAllSurname("common-single").length

149

## cnnamestr()

司茵

## cnnamestr("彭")

彭韬

## cnnamestr(5)

杜杉,戴婷奇,欧阳均芮,潘元安,龙彤燕

## cnnamestr("姚", 5)

姚美,姚峻,姚钧奇,姚勋,姚茵楠

## cnnamestr({ count: 5 })

马倩,叶韬善,郭霄柏,方辉贺,苏梦阳

## cnnamestr({ count: 5, unique: true, duplicatedGivenName: true })

冯希希,宋弘弘,费雪雪,樊岳岳,陈萧萧

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
