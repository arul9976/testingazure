        var n1 = document.getElementById("num1");
        var n2 = document.getElementById("num2");
        var res = document.getElementById("result");

        var n3 = document.getElementById("num3");
        var n4 = document.getElementById("num4");
        var res1 = document.getElementById("result1")

        var n5 = document.getElementById("num5")
        var n6 = document.getElementById("num6")
        var res2 = document.getElementById("result2")

        var n7 = document.getElementById("num7")
        var n8 = document.getElementById("num8")
        var res3 = document.getElementById("result3")

        var n9 = document.getElementById("num9")
        var n10 = document.getElementById("num10")
        var res4 = document.getElementById("result4")

        var n11 = document.getElementById("num11")
        var n12 = document.getElementById("num12")
        var res5 = document.getElementById("result5")

// t1
        var t1 = document.getElementById("total")
        var t2 = document.getElementById("total1")
        var t3 = document.getElementById("total2")
        var t4 = document.getElementById("total3")
        var t5 = document.getElementById("total4")
        var t6 = document.getElementById("total5")

        var all = document.getElementById("toall")
        


        // result

        document.getElementById("sub").addEventListener
        ("click", function()  {
            res.value = parseInt(n1.value)-parseInt(n2.value)
        })
        document.getElementById("sub").addEventListener
        ("click", function()  {
            res1.value = parseInt(n3.value)-parseInt(n4.value)
        })
        document.getElementById("sub").addEventListener
        ("click", function()  {
            res2.value = parseInt(n5.value)-parseInt(n6.value)
        })
        document.getElementById("sub").addEventListener
        ("click", function()  {
            res3.value = parseInt(n7.value)-parseInt(n8.value)
        })
        document.getElementById("sub").addEventListener
        ("click", function()  {
            res4.value = parseInt(n9.value)-parseInt(n10.value)
        })
        document.getElementById("sub").addEventListener
        ("click", function()  {
            res5.value = parseInt(n11.value)-parseInt(n12.value)
        })

        // sum

        document.getElementById("sum").addEventListener
        ("click", function()  {
            t1.value = parseInt(res.value)*60
        })
        document.getElementById("sum").addEventListener
        ("click", function()  {
            t2.value = parseInt(res1.value)*50
        })
        document.getElementById("sum").addEventListener
        ("click", function()  {
            t3.value = parseInt(res2.value)*40
        })
        document.getElementById("sum").addEventListener
        ("click", function()  {
            t4.value = parseInt(res3.value)*30
        })
        document.getElementById("sum").addEventListener
        ("click", function()  {
            t5.value = parseInt(res4.value)*80
        })
        document.getElementById("sum").addEventListener
        ("click", function()  {
            t6.value = parseInt(res5.value)*30
        })



        //total


        document.getElementById("all").addEventListener
        ("click", function()  {
            all.value = parseInt(t1.value)+parseInt(t2.value)+parseInt(t3.value)+parseInt(t4.value)+parseInt(t5.value)+parseInt(t6.value)
        })