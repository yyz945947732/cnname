
# API Preview

## cnname()

随燕毓

## cnname("彭")

彭虹玲

## cnname(5)

怀飞妹,宋珠,旷钧,出武东,宰父辞

## cnname("姚", 5)

姚闻,姚希敬,姚谣娜,姚彪慧,姚慈闻

## cnname({ count: 5 })

景腾冰,母琦,闻人贵妹,刀朝天,廖学

## cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true })

杞麟麟,程骞骞,闽瀚瀚,完达达,茆雄雄

## cnname({ count: 5, surname: "张" })

张翎幽,张然,张云叶,张勤慧,张娴夏

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张欢学,张云凌,张晨宁,张雅炜,张永勇

## cnname({ count: 5, unique: true, part: "surname" })

悉,邬,邵,喜,开

## cnname({ count: 5, unique: true, part: "givenName" })

彩,波,玲,朝,彬

## cnname({ count: 5, unique: true, surnameType: "single", givenNameLength: 1 })

浑诗,扈蕊,幸芬,王盛,邱栋

## cnname({ count: 5, unique: true, surnameType: "compound", givenNameLength: 1 })

尉迟爱,西门苑,巫马曜,欧阳琴,公羊启

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

许盛,梁薇,孔晓,郭朗,钱芝

## cnname({ count: 5, unique: true, surnameType: "single-common", givenNameLength: 1 })

潘文,魏元,柏美,贺峰,房辞

## cnname({ count: 5, unique: true, surnameType: "compound-common", givenNameLength: 1 })

诸葛安,皇甫哲,申屠岑,长孙文,长孙萍

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张芳香,李环,李茜茗,张茜颖,张梅

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,闫,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,奚,施,屈,祝,聂,司,伍,柯,樊,章,童,费,卫,倪,严,宿,翁,甄,申,应,车,巢,关,蒲,符,柏,佟,蒙,牛,佘,瞿,甘,莫,房,裴,翟,詹,明,成,廉,岑,阮,蓝,雷,丘,闻,庞,党,上官,欧阳,司马,夏侯,诸葛,东方,皇甫,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,闾丘,太叔,申屠,公冶,澹台,公良,南宫

## getAllSurname("common").length

173

## getAllSurname("compound-common")

上官,欧阳,司马,夏侯,诸葛,东方,皇甫,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,闾丘,太叔,申屠,公冶,澹台,公良,南宫

## getAllSurname("compound-common").length

23

## getAllSurname("single-common")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,闫,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,奚,施,屈,祝,聂,司,伍,柯,樊,章,童,费,卫,倪,严,宿,翁,甄,申,应,车,巢,关,蒲,符,柏,佟,蒙,牛,佘,瞿,甘,莫,房,裴,翟,詹,明,成,廉,岑,阮,蓝,雷,丘,闻,庞,党

## getAllSurname("single-common").length

150

## cnnamestr()

陶艳端

## cnnamestr("彭")

彭婷

## cnnamestr(5)

嘉宏,师青,殳诗珠,源才,夫跃

## cnnamestr("姚", 5)

姚昕,姚露宏,姚华,姚武,姚娣

## cnnamestr({ count: 5 })

皇甫成强,府波佳,恭城,宦岑宾,何栋凌

## cnnamestr({ count: 5, unique: true, duplicatedGivenNameOnly: true })

牟之之,能若若,骆谐谐,虎健健,寇成成

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
