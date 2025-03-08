
# API Preview

## cnname()

蔚岩谣

## cnname("彭")

彭丰

## cnname(5)

唐娴伯,窦棋贵,沙芸艳,桑珠,东彩雯

## cnname("姚", 5)

姚礼辰,姚惠贤,姚柔玉,姚翊,姚琴

## cnname({ count: 5 })

皇甫成,繁天启,法波,督云娴,郦廉谦

## cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true })

糜涛涛,员启启,操玉玉,泥忠忠,易启启

## cnname({ count: 5, surname: "张" })

张盛泰,张墨筠,张晔,张廉画,张珍

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张辰保,张羽蕊,张青超,张彬荷,张瑞心

## cnname({ count: 5, unique: true, part: "surname" })

童,丹,毓,叶,萨

## cnname({ count: 5, unique: true, part: "givenName" })

滢,顺爽,昭,韬莺,东

## cnname({ count: 5, unique: true, surnameType: "single", givenNameLength: 1 })

于文,陀扬,区幽,崇山,匡之

## cnname({ count: 5, unique: true, surnameType: "compound", givenNameLength: 1 })

单于灿,司空楠,长孙晖,子车鹤,空曾珊

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

卫鹏,郭飘,韩茂,贺韬,龙爽

## cnname({ count: 5, unique: true, surnameType: "single-common", givenNameLength: 1 })

居福,康韵,戴思,方芳,党新

## cnname({ count: 5, unique: true, surnameType: "compound-common", givenNameLength: 1 })

上官友,长孙友,东方恒,夏侯轮,尉迟茂

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张康,张志,李雯灿,李绍,张昕

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,闫,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,漕,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,奚,施,屈,祝,杜,刘,聂,司,伍,柯,樊,章,许,童,费,卢,皮,卫,倪,严,沈,宿,翁,秦,甄,申,扶,宗,应,祝,冀,乔,盖,车,须,丰,巢,关,蒲,邸,符,冉,柏,佟,练,蒙,幸,牛,寇,乔,充,佘,瞿,甘,厉,莫,经,房,裴,陆,荣,翟,詹,湛,赵,公,仇,迟,米,贝,明,伏,成,程,宣,佴,井,车,逄,斐,廉,岑,褚,阮,蓝,雷,丘,闻,易,皮,庞,公,季,计,谷,党,谈,宿,尚,童,盖,祖,居,上官,欧阳,司马,夏侯,诸葛,东方,皇甫,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,闾丘,太叔,申屠,公冶,澹台,公良,南宫

## getAllSurname("compound-common")

上官,欧阳,司马,夏侯,诸葛,东方,皇甫,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,闾丘,太叔,申屠,公冶,澹台,公良,南宫

## getAllSurname("single-common")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,闫,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,漕,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,奚,施,屈,祝,杜,刘,聂,司,伍,柯,樊,章,许,童,费,卢,皮,卫,倪,严,沈,宿,翁,秦,甄,申,扶,宗,应,祝,冀,乔,盖,车,须,丰,巢,关,蒲,邸,符,冉,柏,佟,练,蒙,幸,牛,寇,乔,充,佘,瞿,甘,厉,莫,经,房,裴,陆,荣,翟,詹,湛,赵,公,仇,迟,米,贝,明,伏,成,程,宣,佴,井,车,逄,斐,廉,岑,褚,阮,蓝,雷,丘,闻,易,皮,庞,公,季,计,谷,党,谈,宿,尚,童,盖,祖,居

## cnnamestr()

兰鸿

## cnnamestr("彭")

彭俊博

## cnnamestr(5)

阮艳彪,蓬涛,万俟晗瑗,夫俊,斐柏明

## cnnamestr("姚", 5)

姚国雪,姚洁,姚岩震,姚霄东,姚祥

## cnnamestr({ count: 5 })

祖青茗,堵怡,檀贵,宝德启,茂利

## cnnamestr({ count: 5, unique: true, duplicatedGivenNameOnly: true })

求章章,暴光光,俟菁菁,检进进,云友友

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
