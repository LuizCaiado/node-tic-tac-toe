# node-tic-tac-toe


## Q1 - Criar um jogo da velha online usando apenas nodejs e javascript. O jogo deve funcionar da seguinte maneira: 
### 1. O servidor node deve ter quatro rotas respondendo via GET: 
#### MarcarCelula(posI, posJ); 
  - PosI posição I do tabuleiro. 
  - PosJ posição J do tabuleiro. 
  - O jogo deve começar com o X! 
  - Para cada chamada de MarcarCelula, alterne de X para O. 
  - Caso o jogo tenha terminado, não permita modificações no tabuleiro. 
#### LerTabuleiro; 
  - Retorne um tabuleiro para o cliente. 
#### ResetarJogo; 
  - Reseta o jogo. 
  - Limpa o tabuleiro e podemos jogar outra vez. 
#### index.html e ”/” 
  - Retorna o HTML da página. 

### 2. O cliente deve ser um html básico, só com a tela do jogo da velha. Você deve fazer as requisições para o Servidor via Ajax. Quando o usuário clicar em uma posição do tabuleiro, chame a rotina MarcarCelula com a posição que foi clicada. 
• A cada 1 segundo, atualize a página chamando o método LerTabuleiro. 
• Quando o usuário clicar em uma celular marque X para jogador 1 e O para o jogador 2. 
• Não é necessário manter uma sessão de quem está jogando (O jogador pode jogar sozinho). Se o usuário clicar em duas posições diferentes, deixe que ele jogue pelo outro jogador. 
### 3. Não é permitido o uso de frameworks. 
### 4. Faça a hospedagem em um servidor web grátis (Bônus). 
