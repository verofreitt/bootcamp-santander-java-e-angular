public class Telegram extends ServicoMensagemInstantanea {
	public void enviarMensagem() {
		System.out.println("Enviando mensagem pelo Telegram");
	}
	public void receberMensagem() {
		System.out.println("Recebendo mensagem pelo Telegram");
	}
	@Override
	public void salvarHistoricoMensagem() {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'salvarHistoricoMensagem'");
	}
}
