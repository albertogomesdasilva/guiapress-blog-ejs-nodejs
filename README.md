Formação Node.js -> aula 80

# guiadeperguntaserespostas


A zona padrão no CentOS 7 é "pública". Você pode alterar a zona padrão /etc/firewalld/firewalld.conf mas, por enquanto, vamos deixá-lo como público para os propósitos deste artigo.

Abrindo Portas
Para abrir a porta 80 (http) no seu firewall, você pode utilizar o seguinte comando:

[root@srv ]# firewall-cmd --permanent --zone=public --add-port=80/tcp
Recarregue o firewall para aplicar as alterações:

[root@srv ]# firewall-cmd --reload
Verificando Regras
O seguinte comando pode ser usado para verificar se a porta está aberta, ele retornará um simples sim ou não:

[root@srv ]# firewall-cmd --zone=public --query-port=80/tcp
Criando regras usando nomes de serviços
Como alternativa, você pode criar a regra usando um nome de serviço:

[root@srv ]# firewall-cmd --permanent --zone=public --add-service=http
E agora recarregue o firewall para aplicar as mudanças

[root@srv ]# firewall-cmd --reload
Verifique se a porta de serviço foi aberta:

[root@srv ]# firewall-cmd --zone=public --query-service=http
Exemplo Real
Estes passos irão criar uma entrada permanente na sua configuração de firewall para permitir Conexões TCP para a porta TCP 80 da Internet. Você pode usar "firewall-cmd --list-all" para obter uma visualização da configuração atual do seu firewall.

Exemplo:

[root@srv ]# firewall-cmd --list-all 

public (default, active)
  interfaces: eth0 eth1
  sources:
  services: ssh
  ports: 80/tcp
  masquerade: no
  forward-ports:
  icmp-blocks:
  rich rules:
Para remover a porta ou o serviço que você adicionou.

[root@srv ]# firewall-cmd --zone=public --remove-port=80/tcp
ou

[root@srv ]# firewall-cmd --zone=public --remove-service=http
Em seguida, execute um recarregamento para aplicar as alterações.

[root@srv ]# firewall-cmd --reload
O firewalld nos oferece uma maneira fácil e conveniente de gerenciar as regras de firewall do CentOS 7. Com um pouco de prática, pode se tornar uma ferramenta essencial para manter sua infraestrutura segura e protegida.

Criar banco de dados MySQL no Linux usando linha de comando
Passo 1:
Efetue login no servidor MySQL a partir da linha de comando com o seguinte comando, especificando o usuário root com o sinalizador -u e solicite uma senha usando o sinalizador -p . Digite sua senha atual assim que solicitado para concluir o login.

mysql -u root -p
Você pode alterar a senha do MySQL para o usuário root ou qualquer outro usuário no banco de dados por meio da linha de comando.

Um prompt é exibido como o abaixo quando você faz login.

mysql>
Passo 2:
Para criar um banco de dados com o nome tutorial_database , digite o seguinte comando.

CREATE DATABASE tutorial_database;
Se já existir um banco de dados com o mesmo nome, o sistema não criará um novo banco de dados e você receberá este erro.

ERROR 1007 (HY000): Can't create database 'tutorial_database'; database exists
Você pode evitar esse erro usando o seguinte comando. Ele só cria o banco de dados tutorial_database se um banco de dados com esse nome ainda não existir.

CREATE DATABASE IF NOT EXISTS tutorial_database;
Ver todos os bancos de dados MySQL
Use o seguinte comando para visualizar o banco de dados que você criou.

SHOW DATABASES;
Aqui está a saída resultante.

mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| test               |
| tutorial_database  |
+--------------------+
4 rows in set (0.00 sec)
Empacotando
Criar um banco de dados MySQL a partir da linha de comando do Linux é um processo fácil. Os administradores de sistema fariam bem em ter esse processo em seu kit de ferramentas para adicionar flexibilidade ao seu fluxo de trabalho.