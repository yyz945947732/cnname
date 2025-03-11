
# API Preview

## cnname()

朱鹏

## cnname("彭")

彭哲志

## cnname(5)

顾晨,高萍铭,韩芝颖,董逸霏,费霏

## cnname("姚", 5)

姚才,姚晶,姚楠铭,姚庆艳,姚哲荔

## cnname({ count: 5 })

黄晓,程凌影,熊翎,佟锦震,姚昌洁

## cnname({ count: 5, unique: true, duplicatedGivenName: true })

沈馥涛,乔和海,谢奋城,田毓霞,顾雄富

## cnname({ count: 5, surname: "张" })

张明,张香,张茜博,张冬森,张柔学

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张君岩,张进翊,张盛舞,张羽邦,张欢思

## cnname({ count: 5, unique: true, part: "surname" })

唐,易,徐,贾,刘

## cnname({ count: 5, unique: true, part: "givenName" })

伊凯,露,子,涛,蓓

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

孙志,仰绍,马冬,终琴,郗富

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

呼延宾,闾丘昌,濮阳强,乐正然,端木强

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

戴灿,何茗,吴娴,柏达,陆勇

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

徐发,秦曲,乔星,章彬,任娅

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

上官仁,司马俊,司马曲,司空晗,令狐彬

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张馥以,张苑,李瀚,张曦艺,张毅泉

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

杜云静

## cnnamestr("彭")

彭河

## cnnamestr(5)

康娟明,蔡香绍,蒋雷固,夏佳,林壮

## cnnamestr("姚", 5)

姚盛,姚澜忠,姚莲,姚攀悦,姚秋

## cnnamestr({ count: 5 })

甄清,龙翰,谭竹,谭琛绍,徐昕焕

## cnnamestr({ count: 5, unique: true, duplicatedGivenName: true })

夏建,丁德,高墨行,杜荣,明裕颖

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
