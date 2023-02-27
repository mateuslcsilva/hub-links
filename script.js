const textoReinstalacao = () => {
    const text = `=> Reinstalação de Sistema TRADE

Cliente entrou em contato, e solicitou a reinstalação do sistema, pois precisou formatar a máquina. Afirma que foi feito backup da pasta Publisoft.
    
Ciente da cobrança de hora técnica.
    
[n]=> Cliente NÃO POSSUI PubliBackup <=[/n]
    
Por favor, após terminar o procedimento, devolver a solicitação para que eu possa combinar data de vencimento.
    
Motivo da Reinstalação:
    
(44)9.xxxx-xxxx`

    navigator.clipboard.writeText(text)

    Toastify({
        text: "Texto copiado!!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(145deg, #090909, #171717)",
        }
      }).showToast();
}

const textoAssinatura = () => {
    const text = `Você tem contratos pendentes em assinatura! Por gentileza, assine assim que possível. Agradecemos desde já.`

    navigator.clipboard.writeText(text)

    Toastify({
        text: "Texto copiado!!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(145deg, #090909, #171717)",
        }
      }).showToast();
}

const textoPIX = () => {
    const text = `Segue chave PIX:

PIX BB - CNPJ =>  82.483.843/0001-50
  PUBLISOFT INFORMATICA  LTDA`

    navigator.clipboard.writeText(text)

    Toastify({
        text: "Texto copiado!!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(145deg, #090909, #171717)",
        }
      }).showToast();
}

const textoCarne = () => {
    const text = `Segue carnê para pagamento das suas mensalidades Publisoft.

Em caso de dúvidas, por favor, não hesite em nos contatar em (44)9.9870-1802, por ligação ou whatsapp.
    
****ATENÇÃO: 2 (dois) boletos por página*****`

    navigator.clipboard.writeText(text)

    Toastify({
        text: "Texto copiado!!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(145deg, #090909, #171717)",
        }
      }).showToast();
}

const textoNovoCarne = () => {
    const text = `Segue novo carnê para pagamento das suas mensalidades Publisoft, de acordo com alterações recentes.

Em caso de dúvidas, por favor, não hesite em nos contatar em (44)9.9870-1802, por ligação ou whatsapp.
        
****ATENÇÃO: 2 (dois) boletos por página*****`

    navigator.clipboard.writeText(text)

    Toastify({
        text: "Texto copiado!!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(145deg, #090909, #171717)",
        }
      }).showToast();
}

const textoImplantacao = () => {
    const text = `Segue boleto para pagamento dos valores de implantação do sistema Publisoft.

Em caso de dúvidas, por favor, não hesite em nos contatar em (44)9.9870-1802, por ligação ou whatsapp.
    
****ATENÇÃO: 2 (dois) boletos por página*****`

    navigator.clipboard.writeText(text)

    Toastify({
        text: "Texto copiado!!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(145deg, #090909, #171717)",
        }
      }).showToast();
}

const textoBoletoBackup = () => {
    const text = `Segue boleto para pagamento da anuidade do serviço de backup automático Publisoft.

Em caso de dúvidas, por favor, não hesite em nos contatar em (44)9.9870-1802, por ligação ou whatsapp.
    
****ATENÇÃO: 2 (dois) boletos por página*****`

    navigator.clipboard.writeText(text)

    Toastify({
        text: "Texto copiado!!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(145deg, #090909, #171717)",
        }
      }).showToast();
}