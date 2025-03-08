
# API Preview

## cnname()

凃肖奇

## cnname("彭")

彭生

## cnname(5)

买璐,融冰仪,柏亨,诸葛山芬,位璐

## cnname("姚", 5)

姚子泽,姚轩,姚婷,姚朋,姚伟柔

## cnname({ count: 5 })

由画滢,云秀韵,暴璧,英松悦,冷影春

## cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true })

宇义义,邝吉吉,滑炜炜,开梦梦,易桂桂

## cnname({ count: 5, surname: "张" })

张生,张琼,张福炜,张飞莎,张曦森

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张欣琦,张巧伟,张仪博,张琼雄,张蓉美

## cnname({ count: 5, unique: true, part: "surname" })

宣,潜,赫连,首,亓

## cnname({ count: 5, unique: true, part: "givenName" })

壮蓓,融川,珍,娟安,驰

## cnname({ count: 5, unique: true, surnameType: "single", givenNameLength: 1 })

璩霜,娄俭,何韬,匡馥,闭影

## cnname({ count: 5, unique: true, surnameType: "compound", givenNameLength: 1 })

公羊钧,谷梁荔,段干蓓,仲孙富,闾丘云

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

章娴,庞江,符先,澹台鸣,魏飞

## cnname({ count: 5, unique: true, surnameType: "single-common", givenNameLength: 1 })

逄竹,余发,蓝蓉,周闻,廖仁

## cnname({ count: 5, unique: true, surnameType: "compound-common", givenNameLength: 1 })

闾丘敬,轩辕然,司徒启,轩辕书,上官先

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张荔,李莉,李赋策,李乐彩,李翠莎

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
