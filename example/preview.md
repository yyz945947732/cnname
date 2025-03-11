
# API Preview

## cnname()

张文韵

## cnname("彭")

彭凯

## cnname(5)

童境绣,唐梧晖,马境清,孟锴,伍星辰

## cnname("姚", 5)

姚钰,姚承清,姚桂,姚茜清,姚辰榆

## cnname({ count: 5 })

段炎,翁雨澜,朱义轩,许超,单栋颖

## cnname({ count: 5, unique: true, duplicatedGivenName: true })

顾昊昊,姚丽丽,姜梁梁,蒋韵韵,庞杉杉

## cnname({ count: 5, surname: "张" })

张漪坡,张豪,张茹,张伟,张涛

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张皓柔,张柏阳,张勇浩,张淼灿,张骏昆

## cnname({ count: 5, unique: true, part: "surname" })

康,梁,刘,贾,庄

## cnname({ count: 5, unique: true, part: "givenName" })

宏铭,垒劲,颖婷,梧,梓

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

盖俊,扶昊,海晗,阮佳,羊诚

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

仲孙瑜,东方榆,太叔志,上官维,司徒阳

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

苏瑜,高坤,陈均,石熙,赖朗

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

谢晖,戴义,钟柯,孔绮,陆海

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

司徒锻,司空承,欧阳昊,上官波,公孙俊

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张星桂,张泽,李绮,张栋,张均

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

罗星

## cnnamestr("彭")

彭境

## cnnamestr(5)

于钧钧,杜茜,翁娇乔,唐静嘉,申泓深

## cnnamestr("姚", 5)

姚昕志,姚梦,姚湛,姚熙桂,姚义梓

## cnnamestr({ count: 5 })

乔伦,车安希,邓修枫,郝昕龙,魏娇然

## cnnamestr({ count: 5, unique: true, duplicatedGivenName: true })

高峥峥,谢劲劲,冯淼淼,成培培,吕婷婷

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
