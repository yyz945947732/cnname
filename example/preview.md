
# API Preview

## cnname()

叶利

## cnname("彭")

彭德

## cnname(5)

魏梧,轩辕修,梁逸希,曹垒慧,卫梦峻

## cnname("姚", 5)

姚冠,姚华林,姚涵博,姚豪,姚垚伦

## cnname({ count: 5 })

应展瑶,叶勋惠,许克骏,牛昆,龙泽

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

轩辕奕奕,夏军军,韩祥祥,王展展,程瑞瑞

## cnname({ count: 5, surname: "张" })

张利梦,张娇杰,张永炎,张焱,张馨

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张晴柯,张俐宇,张元宏,张燕烽,张乔彬

## cnname({ count: 5, unique: true, part: "surname" })

许,邓,罗,于,石

## cnname({ count: 5, unique: true, part: "givenName" })

毅,露基,芊,波棠,泽

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

井烽,杨露,安超,暴信,冯书

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

赫连妍,宇文煜,公西逸,赫连湛,司空绮

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

尹少,黄奇,韩华,钱炫,范欣

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

苏辰,胡锴,章妍,郑诚,倪伦

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

长孙慧,诸葛维,司空亮,上官宏,慕容芮

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张承,张鼎尧,张华,李舒,张坡深

## cnname({ count: 5, unique: true, givenNameType: "male" })

唐峰,徐祥,屈昊卓,萧伟乐,郭利涛

## cnname({ count: 5, unique: true, givenNameType: "female" })

曹昕霜,石婉,田诗,于柔,冯惠

## cnname({ count: 5, unique: true, givenNameType: "all" })

萧佩,伍航润,范艳庆,段辰,周穗栋

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

许荣凯

## cnnamestr("彭")

彭昀

## cnnamestr(5)

李心,龚希卫,苏佳然,卢槿,庄雪

## cnnamestr("姚", 5)

姚棠琦,姚书,姚云,姚骏凯,姚穗柏

## cnnamestr({ count: 5 })

余灿,冯豪钜,章利,刘珂漪,郭书

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

孙森森,邹健健,高勇勇,赵智智,刘榆榆

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
