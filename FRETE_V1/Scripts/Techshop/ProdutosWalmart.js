﻿$(document).ready(function ($) {
    //Mascaras
    $('#PrecoPromocional').maskMoney({ thousands: '', decimal: '.' });
    $('#Preco').maskMoney({ thousands: '', decimal: '.' });
    $('#Peso').maskMoney({ thousands: '', decimal: '.' });
    $('#Comprimento').maskMoney({ thousands: '', decimal: '.' });
    $('#Largura').maskMoney({ thousands: '', decimal: '.' });
    $('#Altura').maskMoney({ thousands: '', decimal: '.' });
    

    CarregaGridCategorias();
    TotalSku = 0;

    if($('#CodigoCategoria').val()!=undefined){

        CarregaGridSubCategorias($('#CodigoCategoria').val());

        TotalSku = $('#QuantidadeVariacoes').val();

    } 
 

  
    /*if ($('#StatusProduto').val() == true) {
        alert("Aqui!" + $('#StatusProduto').val());
        
    }*/


    if ($('#CodigoCategoria').val() != undefined) {

        if ($('#StatusProduto').val()) {

            $("#SelectStatus").val("true");
        } else {
            $("#SelectStatus").val("false");

        }
      //  alert($('#StatusProduto').val());
     }
    
    $("#hider").hide();

    $("#popup_box").hide();     

    
    $('#Variacao').click(function () {
        /*TotalSku = TotalSku + 1;
        alert("#Descricao" + $(this).prop('title'));

        $("#Descricao" + $(this).prop('title')).remove();
        $("#Variacao" + $(this).prop('title')).remove();
        $("#DivImagem" + $(this).prop('title')).remove();*/
     
    });

    
    remove = function (item) {

        
        var tr = $(item).closest('tr');

        if (tr.attr('id') != "Linha1") {
            TotalSku = TotalSku - 1;

           tr.fadeOut(400, function () {
               tr.remove();

               $("#Descricao" + tr.attr('id')).remove();

        });}


        return false;
    }
  
    $(document).on('click', '.removeButton', function () {

        $('#Variacoes' + TotalSku).remove();
        $('#DivImagem' + TotalSku).remove();
        $('#Cabecalho' + TotalSku).remove();        
  
    });

    $('#AdicionarSku').click(function () {

        TotalSku = parseInt(TotalSku) + 1;
     
    
        var divVariacoes = "";
        var divImagem = "";
        divVariacoes += "  <div class='form-group' id='Cabecalho" + TotalSku + "'><label class='col-sm-2 control-label'>Variação" + TotalSku + " </label></div>";
        divVariacoes += "<div class='rows' id='Variacoes" + TotalSku + "'>";
        divVariacoes+="<div class='col-md-2'>";
        divVariacoes += "     <input id='Sku' placeholder='Sku' name='Sku" + TotalSku + "' value='' class='form-control text-right ng-pristine ng-invalid ng-invalid-required' maxlength='14'>";
        divVariacoes+=" </div>";
        divVariacoes+=" <div class='col-md-2'>";
        divVariacoes += "     <input id='Ean' placeholder='Ean' name='Ean" + TotalSku + "'  value='' class='form-control text-right ng-pristine ng-invalid ng-invalid-required' required='required'>";
        divVariacoes+=" </div>";
        divVariacoes+=" <div class='col-md-1'>";
        divVariacoes += "     <input id='Cor' placeholder='Cor' name='Cor" + TotalSku + "'  value='' class='form-control text-right ng-pristine ng-invalid ng-invalid-required' maxlength='14'>";
        divVariacoes+=" </div>";
        divVariacoes+=" <div class='col-md-2'>";
        divVariacoes += "     <input id='Tamanho' placeholder='Tamanho'  name='Tamanho" + TotalSku + "'  value='' class='form-control text-right ng-pristine ng-invalid ng-invalid-required' maxlength='14'>";
        divVariacoes+=" </div>";
        divVariacoes+=" <div class='col-md-2'>";
        divVariacoes += "     <input id='Voltagem'placeholder='Voltagem' name='Voltagem" + TotalSku + "'  value='' class='form-control text-right ng-pristine ng-invalid ng-invalid-required' maxlength='14'>";
        divVariacoes+=" </div>";
        divVariacoes+=" <div class='col-md-2'>";
        divVariacoes += "     <input id='Estoque' placeholder='Estoque' name='qty" + TotalSku + "'  type='number' class='text-right form-control ng-pristine ng-valid ng-valid-number ng-valid-min ng-valid-required' min='0'>";
        divVariacoes+="   </div>";
        divVariacoes+=" <div class='col-md-1'>";
        divVariacoes += "<button type='button' class='removeButton'>--</button>";
        divVariacoes+="     </div>";
        divVariacoes += " </div>";        
        divImagem += "<div id='DivImagem" + TotalSku + "'>";
        divImagem += "    <div class='rows'>";
        divImagem += "          <div class='col-md-4'>";
        divImagem += "              *Foto 1";
        divImagem += "          </div>";
        divImagem += "          <div class='col-md-4'>";
        divImagem += "              Foto 2";
        divImagem += "          </div>";
        divImagem += "          <div class='col-md-4'>";
        divImagem += "              Foto 3";              
        divImagem += "         </div> ";
        divImagem += "    </div>";
        divImagem += "    <div class='rows'>";
        divImagem += "         <div class='col-md-4'>";
        divImagem += "             <input type='text' name='ImagemVariacaoFoto1" + TotalSku + "' class='form-control' required placeholder='http://www.site.com.br/imagem.jpg'>";
        divImagem += "          </div>";
        divImagem += "          <div class='col-md-4'>";
        divImagem += "              <input type='text' name='ImagemVariacaoFoto2" + TotalSku + "' class='form-control' placeholder='http://www.site.com.br/imagem.jpg'>";
        divImagem += "          </div>";
        divImagem += "          <div class='col-md-4'>";
        divImagem += "              <input type='text' name='ImagemVariacaoFoto3" + TotalSku + "' class='form-control' placeholder='http://www.site.com.br/imagem.jpg'>";
        divImagem += "          </div>";
        divImagem += "      </div>";
        divImagem += "    <div class='rows'>";
        divImagem += "         <div class='col-md-4'>";
        divImagem += "             Foto 4";
        divImagem += "         </div>";
        divImagem += "         <div class='col-md-4'>";
        divImagem += "             Foto 5";
        divImagem += "         </div>";
        divImagem += "         <div class='col-md-4'>";
        divImagem += "              Foto 6";
        divImagem += "         </div>";
        divImagem += "     </div>  ";
         divImagem += "   <div class='rows'>";
         divImagem += "         <div class='col-md-4'>";
         divImagem += "             <input type='text' name='ImagemVariacaoFoto4" + TotalSku + "' class='form-control' placeholder='http://www.site.com.br/imagem.jpg'>";
         divImagem += "         </div>";
         divImagem += "         <div class='col-md-4'>";
         divImagem += "            <input type='text' name='ImagemVariacaoFoto5" + TotalSku + "' class='form-control' placeholder='http://www.site.com.br/imagem.jpg'>";
         divImagem += "         </div>";
         divImagem += "         <div class='col-md-4'>";
         divImagem += "             <input type='text' name='ImagemVariacaoFoto6" + TotalSku + "' class='form-control' placeholder='http://www.site.com.br/imagem.jpg'>";
         divImagem += "         </div>";
         divImagem += "     </div>  ";
         divImagem += "</div>";
         
        $("#DemaisVariacoes").append(divVariacoes);
        $("#DemaisVariacoes").append(divImagem);

    });
    
    $('#RemoverSku').click(function () {

        //alert('Remover Sku');

    });
    
    $('#SelectCategoria').change(function () {

        CarregaGridSubCategorias(this.value);


    });

    function CarregaGridSubCategorias(Codigo) {

        $('#SelectSubCategoria').empty();

        var selectSubCategoria = "";

        $.ajax({
            type: "GET",
            url: "/ProdutoWalmart/BuscarSubCategorias/",
            data:{CodigoCategoria:Codigo},
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {

                    if (EmpData.DescricaoSubCategoria == $('#DescricaoSubCategoria').val()) {

                        selectSubCategoria = selectSubCategoria + "<option selected value='" + EmpData.CodigoSubCategoria + "'>" + EmpData.DescricaoSubCategoria + "</option>";
                    } else {
                        selectSubCategoria = selectSubCategoria + "<option value='" + EmpData.CodigoSubCategoria + "'>" + EmpData.DescricaoSubCategoria + "</option>";

                    }

                })
                $('#SelectSubCategoria').append(selectSubCategoria);
            }
        });

    }

    function CarregaGridCategorias() {


         var selectCategoria = "";

        $.ajax({
            type: "GET",
            url: "/ProdutoWalmart/BuscarCategorias/",
            dataType: "json",
            success: function (json) {
                $.each(json, function (i, EmpData) {
                    

                    if (EmpData.CodigoCategoria == $('#CodigoCategoria').val()) {

                        selectCategoria = selectCategoria+"<option selected value='" + EmpData.CodigoCategoria + "'>" + EmpData.DescricaoCategoria + "</option>";
                    } else {

                        selectCategoria = selectCategoria + "<option value='" + EmpData.CodigoCategoria + "'>" + EmpData.DescricaoCategoria + "</option>";


                    }
                    
                })
                $('#SelectCategoria').append(selectCategoria);
            }
        });

    }
    
    function AtualizaGrid() {
        var TotalItensPagina = "";
        $("#hider").fadeIn("slow");
        $('#popup_box').fadeIn("slow");
        var TotalItensPagina = "";
        var PaginaAtual = $('#SelectNumeroPagina').val();

               var tr;

        $.getJSON('/ProdutoWalmart/Buscar/',
           {
               Nome: $('#Nome').val(),
               TotalPaginas: $('#SelectTotalPaginas').val(),
               PaginaAtual: $('#SelectNumeroPagina').val(),
               Status: $('#SelectStatus').val()
            
           },
          function (json) {

              $("#TblEmpDet tbody").empty();
              $.each(json, function (i, EmpData) {

                  tr = $('<tr/>');
                  tr.append("<th>" + EmpData.sellerSKU + "</th>");
                  tr.append("<th>" + EmpData.name + "</th>");
             
                  if (EmpData.active == true){
                      tr.append("<th style='text-align:center'>Ativo</th>");
                  } else {

                      tr.append("<th style='align-content:center'>Inativo</th>");
                  }
                  tr.append("<th>" + EmpData.quantity + "</th>");
                  tr.append("<th>R$ " + EmpData.url + "</th>");
                  tr.append("<th>" + "<a id='deletar' class='confirmation-callback' href=/ProdutoWalmart/Edit/" + EmpData.sellerSKU + ">Editar</a>" + "</th>");
                  tr.append('<input type="hidden" id="item-to-delete"/>');
                  $('#TblEmpDet').append(tr);
                  $('#TotalPaginas').text(EmpData.TotalBusca);
                 
                  if (TotalItensPagina == "") {
                      CarregaItensPagina(EmpData.TotalItensPagina, PaginaAtual);
                  }
                  TotalItensPagina = EmpData.TotalBusca;
              })
              $("#hider").fadeOut("slow");
              $('#popup_box').fadeOut("slow");
          });

    }

    function CarregaItensPagina(TotalItens, PaginaAtual) {
       
        $("#SelectNumeroPagina").empty();
        //Clear select
        for(i=1;i<=parseInt(TotalItens);i++){

            $("#SelectNumeroPagina").append(new Option(i,i));
        }
        //Seta página atual
        $("#SelectNumeroPagina").val(PaginaAtual);

        
    };
    
    $('#btnPesquisar').click(function ()    {
        $('#SelectNumeroPagina').val('1');
        AtualizaGrid();

    });    
   
    $('#PrimeiraPagina').click(function () {

        $('#SelectNumeroPagina').val('1');
        AtualizaGrid();

    });
    
    $('#PaginaAnterior').click(function () {
        var pagina=0;

        if ($('#SelectNumeroPagina').val() != "1") {
            pagina = parseInt($('#SelectNumeroPagina').val()) - 1;
            $('#SelectNumeroPagina').val(pagina);
            AtualizaGrid();
        }
        

    });

    $('#ProximaPagina').click(function () {
        var TotalPaginas = $('#SelectNumeroPagina').children('option').length
        
        if (parseInt($('#SelectNumeroPagina').val()) < parseInt(TotalPaginas))
        {
            pagina = parseInt($('#SelectNumeroPagina').val()) + 1;
            $('#SelectNumeroPagina').val(pagina);
            AtualizaGrid();
        }
        

    });

    $('#UltimaPagina').click(function () {

        var TotalPaginas = $('#SelectNumeroPagina').children('option').length;
        $('#SelectNumeroPagina').val(TotalPaginas);
        AtualizaGrid();

    });


    
    $('#SelectTotalPaginas').on('change', function () {
        $("#SelectNumeroPagina").val('1');
        AtualizaGrid();
        // alert(this.value);
    });

  
    $('#SelectNumeroPagina').on('change', function () {

        AtualizaGrid();
        // alert(this.value);
    })

});    
    

